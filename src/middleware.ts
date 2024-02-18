import acceptLanguage from 'accept-language'
import { NextRequest, NextResponse } from 'next/server'

import { cookieName, defaultLocale, languages } from '@/i18n/config'

acceptLanguage.languages(languages)

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
}

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('.') ||
    pathname.includes('/api/')
  ) {
    return NextResponse.next()
  }

  if (
    req.nextUrl.pathname.indexOf('icon') > -1 ||
    req.nextUrl.pathname.indexOf('chrome') > -1
  )
    return NextResponse.next()
  let lng: string | undefined | null
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName)?.value)
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lng) lng = defaultLocale

  if (
    !languages.some((loc: string) =>
      req.nextUrl.pathname.startsWith(`/${loc}`),
    ) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url),
    )
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer') || '')
    const localeInReferer = languages.find((l: string) =>
      refererUrl.pathname.startsWith(`/${l}`),
    )
    const response = NextResponse.next()
    if (localeInReferer) response.cookies.set(cookieName, localeInReferer)
    return response
  }

  return NextResponse.next()
}

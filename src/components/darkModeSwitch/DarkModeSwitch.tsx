'use client'

import * as SwitchPrimitives from '@radix-ui/react-switch'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import * as React from 'react'

import { cn } from '@/lib/utils'

const DarkModeSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const { setTheme, theme } = useTheme()

  function handleSwitchTheme() {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
  }

  React.useEffect(() => {
    // Aplica a classe de tema no body para evitar mismatch e atributos extras
    const html = document.querySelector('html')
    const theme = html?.classList.contains('light') ? 'light' : 'dark'
    html?.classList.add(theme)
  }, [])

  return (
    <SwitchPrimitives.Root
      className={cn(
        'peer relative z-50 inline-flex h-10 w-16 shrink-0 cursor-pointer items-center rounded-full border shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-background data-[state=unchecked]:bg-background',
        className,
      )}
      {...props}
      ref={ref}
      onClick={handleSwitchTheme}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          'pointer-events-none absolute block h-6 w-6 rounded-full bg-foreground shadow-lg ring-0 transition-all duration-500 ease-out data-[state=checked]:translate-x-8 data-[state=unchecked]:translate-x-2',
        )}
      />
      <Sun className={`mx-auto h-4 w-4 text-foreground`} />
      <Moon className={`mx-auto h-4 w-4 text-foreground`} />
    </SwitchPrimitives.Root>
  )
})

DarkModeSwitch.displayName = SwitchPrimitives.Root.displayName

export { DarkModeSwitch }

'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FacebookLogo, TwitterLogo } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { useLanguage } from '@/app/contexts/LanguageContext'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useTranslation } from '@/i18n/client'

export function FormContainer() {
  const { lng } = useLanguage()
  const { t } = useTranslation(lng)

  const formSchema = z.object({
    name: z.string().min(1, t('home.heroSection.form.Enter your name')),
    from: z
      .string()
      .email(t('home.heroSection.form.Invalid e-mail'))
      .min(5, t('home.heroSection.form.Enter your e-mail')),
    body: z
      .string()
      .min(
        15,
        t('home.heroSection.form.Message must be at least 15 characters long'),
      ),
  })

  type FormSchema = z.infer<typeof formSchema>

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      from: '',
      body: '',
    },
  })

  async function onSubmit(data: FormSchema) {
    try {
      await new Promise((resolve, reject) => setTimeout(reject, 2000))
      console.log(data)

      toast.success(
        t(
          "home.heroSection.form.Message successfully sent! We'll be in touch shortly.",
        ),
      )
    } catch (err) {
      toast.error(
        t(
          'home.heroSection.form.Oops! Something went wrong. Refresh and try again.',
        ),
      )
    }
  }

  return (
    <div className="relative flex flex-col gap-6 rounded-md bg-foreground p-10 dark:bg-background max-xl:w-[640px] max-sm:hidden max-sm:w-full">
      <div className="absolute -top-10 left-10 -z-10 h-full w-full rounded-md border-8 border-background/60 transition-none dark:border-foreground/60 max-sm:hidden"></div>
      <div className="flex flex-col">
        <h2 className="text-4xl font-bold tracking-wide text-emerald-500 max-xl:text-center">
          {t('home.heroSection.form.ACCELERATE YOUR MANAGEMENT')} <br />
          {t('home.heroSection.form.BUSINESS')}
        </h2>
        <p className="max-w-[455px] leading-relaxed text-background dark:text-foreground max-xl:max-w-full max-xl:text-center">
          {t(
            'home.heroSection.form.Get in touch and experience the speed of Gestix today.',
          )}
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-[455px] flex-col gap-4 max-xl:w-full"
        >
          <div className="flex gap-4 max-sm:flex-col">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      placeholder={t('home.heroSection.form.Name')}
                      {...field}
                      type="text"
                      className="text-foreground"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="from"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      placeholder={t('home.heroSection.form.E-mail')}
                      {...field}
                      type="email"
                      className="text-foreground"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem className="">
                <FormControl>
                  <Textarea
                    placeholder={t(
                      'home.heroSection.form.Enter your message here...',
                    )}
                    className="h-40 resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-emerald-500 transition-all duration-300 ease-out"
          >
            {t('home.heroSection.form.Submit')}
          </Button>
        </form>
      </Form>
      <div className="flex items-center gap-2">
        <FacebookLogo
          size={32}
          weight="fill"
          className="cursor-pointer text-background transition-all duration-300 ease-out hover:brightness-75 dark:text-foreground"
        />
        <TwitterLogo
          size={32}
          weight="fill"
          className="cursor-pointer text-background transition-all duration-300 ease-out hover:brightness-75 dark:text-foreground"
        />
      </div>
    </div>
  )
}

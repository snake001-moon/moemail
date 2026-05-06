import { LoginForm } from "@/components/auth/login-form"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import type { Locale } from "@/i18n/config"
import { getTurnstileConfig } from "@/lib/turnstile"
import { getRequestContext } from "@cloudflare/next-on-pages"

export const runtime = "edge"

export default async function LoginPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: localeFromParams } = await params
  const locale = localeFromParams as Locale
  const session = await auth()
  
  if (session?.user) {
    redirect(`/${locale}`)
  }

  const env = getRequestContext().env
  const registerEnabled = await env.SITE_CONFIG.get("REGISTER_ENABLED")
  if (registerEnabled === "false") {
    redirect(`/${locale}`)
  }

  const turnstile = await getTurnstileConfig()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
      <LoginForm turnstile={{ enabled: turnstile.enabled, siteKey: turnstile.siteKey }} />
    </div>
  )
}

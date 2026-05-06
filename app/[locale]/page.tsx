import { Header } from "@/components/layout/header"
import { getTranslations } from "next-intl/server"
import type { Locale } from "@/i18n/config"
import { QRCodeCat } from "@/components/home/qrcode-cat"

export const runtime = "edge"

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: localeFromParams } = await params
  const locale = localeFromParams as Locale
  const t = await getTranslations({ locale, namespace: "home" })

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1600px]">
        <Header />
        <main className="pt-16">
          <div className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-2 relative overflow-hidden">
            <div className="w-full max-w-3xl mx-auto space-y-6 sm:space-y-8 py-4">
              <div className="space-y-2 sm:space-y-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                    {t("title")}
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-blue-600/70 dark:text-blue-300/70 tracking-wide">
                  {t("subtitle")}
                </p>
              </div>

              <div className="flex justify-center py-4">
                <QRCodeCat />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

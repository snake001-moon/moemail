"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { ExternalLink, Mail } from "lucide-react"

interface BrandHeaderProps {
  title?: string
  subtitle?: string
  ctaText?: string
}

export function BrandHeader({
  title,
  subtitle,
  ctaText,
}: BrandHeaderProps) {
  const t = useTranslations("emails.shared.brand")

  const displayTitle = title || t("title")
  const displaySubtitle = subtitle || t("subtitle")
  const displayCtaText = ctaText || t("cta")
  return (
    <div className="text-center space-y-4 lg:pb-4">
      <div className="flex justify-center pt-2">
        <Link
          href="https://moemail.app"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
        >
          <div className="relative w-12 h-12">
            <svg
              width="48"
              height="48"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary group-hover:scale-105 transition-transform duration-200"
            >
              <path d="M4 18C4 18 5 10 8 8C9 7 10 8 10 10L10 14" className="fill-primary" />
              <path d="M28 18C28 18 27 10 24 8C23 7 22 8 22 10L22 14" className="fill-primary" />
              <ellipse cx="16" cy="20" rx="11" ry="9" className="fill-primary" />
              <ellipse cx="11" cy="17" rx="2.5" ry="3" className="fill-white" />
              <ellipse cx="21" cy="17" rx="2.5" ry="3" className="fill-white" />
              <ellipse cx="11" cy="17" rx="1.2" ry="1.8" className="fill-primary" />
              <ellipse cx="21" cy="17" rx="1.2" ry="1.8" className="fill-primary" />
              <ellipse cx="16" cy="22" rx="1.5" ry="1" className="fill-primary/30" />
              <path d="M14 23L16 24L18 23" className="stroke-primary/50 stroke-1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="5" y1="19" x2="9" y2="20" className="stroke-primary/40 stroke-1" strokeLinecap="round" />
              <line x1="5" y1="22" x2="9" y2="22" className="stroke-primary/40 stroke-1" strokeLinecap="round" />
              <line x1="27" y1="19" x2="23" y2="20" className="stroke-primary/40 stroke-1" strokeLinecap="round" />
              <line x1="27" y1="22" x2="23" y2="22" className="stroke-primary/40 stroke-1" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-3xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
            CatMail
          </span>
        </Link>
      </div>

      <div className="space-y-3">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          {displayTitle}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
          {displaySubtitle}
        </p>
      </div>

      <div className="flex justify-center">
        <Button
          asChild
          size="lg"
          className="gap-2 bg-primary hover:bg-primary/90 text-white px-8 min-h-10 h-auto py-1"
        >
          <Link href="/" target="_blank" rel="noopener noreferrer">
            <Mail className="w-5 h-5" />
            {displayCtaText}
            <ExternalLink className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

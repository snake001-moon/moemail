"use client"

import Link from "next/link"

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
    >
      <div className="relative w-8 h-8">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
      <span className="font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
        CatMail
      </span>
    </Link>
  )
}

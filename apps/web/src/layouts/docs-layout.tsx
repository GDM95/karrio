import {
  inter,
  jetbrains,
  noto,
  ubuntu,
  oxygen,
} from "@karrio/ui/fonts/font";
import { NextraTheme } from '@/components/nextra/theme'
import { getPageMap } from 'nextra/page-map'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Karrio Docs",
  description: "Documentation for Karrio - the modern shipping infrastructure",
  icons: {
    icon: [
      { url: "/favicon.ico", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.ico", media: "(prefers-color-scheme: dark)" }
    ],
    shortcut: [
      { url: "/favicon-16x16.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark-16x16.png", media: "(prefers-color-scheme: dark)" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", media: "(prefers-color-scheme: light)" },
      { url: "/apple-touch-dark-icon.png", media: "(prefers-color-scheme: dark)" }
    ],
  },
};

export default async function DocsLayout({ children }: { children: ReactNode }) {
  const pageMap = await getPageMap();

  return (
    <html lang="en" suppressHydrationWarning
      className={`${inter.variable} ${jetbrains.variable} ${noto.variable} ${ubuntu.variable} ${oxygen.variable} h-full scroll-smooth`}>
      <body className="docs-page bg-background" style={{ margin: 0 }}>
        <NextraTheme pageMap={pageMap}>
          {children}
        </NextraTheme>
      </body>
    </html>
  )
}

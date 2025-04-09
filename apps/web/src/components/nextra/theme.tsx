"use client"
import { SidebarProvider, SidebarInset } from '@karrio/ui/components/ui/sidebar'
import { Sidebar } from '@/components/nextra/sidebar'
import { Header } from '@/components/nextra/header'
import { Footer } from '@/components/nextra/footer'
import { TOC } from '@/components/nextra/toc'
import RootProvider from '@/hooks/root-provider'
import type { FC, ReactNode } from 'react'
import type { PageMapItem } from 'nextra'

export const NextraTheme: FC<{
  children: ReactNode
  pageMap: PageMapItem[]
  hideSidebar?: boolean
  hideTOC?: boolean
}> = ({ children, pageMap, hideSidebar = false, hideTOC = false }) => {
  return (
    <RootProvider
      defaultTheme="system"
      disableTransitionOnChange
      sectionKey="content"
    >
      <div className="flex min-h-screen w-full docs-container overflow-hidden bg-background dark:text-white">
        <SidebarProvider>
          {/* Show sidebar on mobile or when hideSidebar is false */}
          <div className={`${hideSidebar ? 'md:hidden' : ''}`}>
            <Sidebar pageMap={pageMap} />
          </div>

          <SidebarInset className={`flex-1 flex flex-col overflow-hidden ${hideSidebar ? 'md:ml-0' : ''}`}>
            {/* Fixed header - responsive width */}
            <div className="fixed top-0 z-40 w-full md:w-[calc(100%-16rem)] bg-white bg-background">
              <Header pageMap={pageMap} />
            </div>

            {/* Main content with padding to account for fixed header */}
            <div className="flex-1 overflow-y-auto pt-12 w-full">
              <div className="flex flex-col gap-4 docs-content bg-background w-full">
                <div className="w-full lg:px-8 px-4">
                  <div className="flex flex-col xl:flex-row xl:gap-10">
                    {/* Main content */}
                    <div className="flex-1 mx-auto min-w-0 w-full max-w-4xl prose prose-h1:text-2xl prose-h1:font-semibold prose-h1:mb-6 prose-h2:text-xl prose-h2:font-semibold prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-h3:font-medium prose-h3:mt-8 prose-h3:mb-3 prose-p:text-sm prose-p:leading-6 prose-li:text-sm prose-li:leading-6 dark:prose-invert prose-headings:tracking-tight prose-a:text-purple-600 dark:prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-700 dark:hover:prose-a:text-purple-300 prose-img:rounded-lg prose-img:max-w-full prose-code:text-gray-800 dark:prose-code:text-gray-200 prose-pre:bg-gray-50 dark:prose-pre:bg-[#0f0c24] prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-neutral-800 prose-pre:rounded-lg prose-pre:overflow-x-auto docs-prose">
                      {children}
                    </div>

                    {/* Fixed TOC - only on xl screens */}
                    {!hideTOC && (
                      <div className="hidden xl:block xl:w-72 relative">
                        <div className="fixed w-72">
                          <div className="pt-10 pb-18">
                            <TOC toc={[]} />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <Footer />
              </div>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </RootProvider>
  )
}

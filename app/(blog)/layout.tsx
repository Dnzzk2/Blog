import { ThemesProvider } from '@/components/providers/ThemesProvider'
import TopNav from '@/components/shared/blog/TopNav'
import '../globals.css'

export const metadata = {
  title: 'Dnzzk2',
  description: 'Dnzzk2的个人博客网站，记录技术成长，记录生活。'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-bodyLight dark:bg-bodyDark">
        <ThemesProvider>
          <TopNav />
          <div className="max-w-4xl m-auto ">
            <main>{children}</main>
          </div>
        </ThemesProvider>
      </body>
    </html>
  )
}

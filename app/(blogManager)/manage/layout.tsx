import { ThemesProvider } from '@/components/providers/ThemesProvider'
import LeftNav from '@/components/shared/manage/LeftNav'
import '../../globals.css'

export const metadata = {
  title: '控制台',
  description: 'Dnzzk2的个人博客网站管理后台。'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-bodyLight dark:bg-bodyDark">
        <ThemesProvider>
          <div className="flex">
            <LeftNav />
            <section>{children}</section>
          </div>
        </ThemesProvider>
      </body>
    </html>
  )
}

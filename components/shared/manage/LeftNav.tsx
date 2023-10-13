'use client'

import { useTheme } from 'next-themes'
import { Teko } from 'next/font/google'
import { usePathname, useRouter } from 'next/navigation'

const teko = Teko({ preload: false })

const LeftNav = () => {
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()
  return <nav className="custom-scrollbar leftNav"></nav>
}

export default LeftNav

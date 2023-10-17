'use client'

import { useTheme } from 'next-themes'
import { Teko } from 'next/font/google'
import { usePathname, useRouter } from 'next/navigation'
import Logo from '../Logo'

const teko = Teko({ preload: false })

const LeftNav = () => {
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()
  return (
    <nav className="custom-scrollbar fixed left-0 top-0 h-screen bg-white dark:bg-cpDark overflow-auto  border-r-[1px] dark:border-r-0 w-[270px] shadow-rightShadow py-[15px] px-[20px] max-md:px-[10px]">
      <div className="flex items-center gap-[5px] mb-5">
        <Logo height={35} width={35} />
        <h5
          className={`text-[28px] h-[35px] font-medium ${teko.className} text-gray-800 dark:text-light`}
        >
          Dnzzk2
        </h5>
      </div>
    </nav>
  )
}

export default LeftNav

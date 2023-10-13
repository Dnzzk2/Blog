'use client'

import { useTheme } from 'next-themes'
import { Teko } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const teko = Teko({ preload: false })

const Nav = () => {
  const { setTheme } = useTheme()
  return (
    <nav className="topNav">
      <div className="flex px-6 py-3 max-w-4xl m-auto items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo.svg"
            alt="logo"
            height={28}
            width={28}
            className="max-xs:py-[2px] dark:hidden"
          />
          <Image
            src="/assets/darkLogo.svg"
            alt="logo"
            height={28}
            width={28}
            className="max-xs:py-[2px] hidden dark:block"
          />
          <p
            className={`text-[24px] h-[32px] text-black dark:text-white font-bold ${teko.className}  max-xs:hidden`}
          >
            Dnzzk2
          </p>
        </Link>
        <div className="flex items-center duration-500 gap-4">
          <Link href="/manage" className="flex items-center">
            <span className="i-ri-flashlight-line text-xl cursor-pointer text-slate-400 hover:text-slate-500 dark:hover:text-slate-300" />
          </Link>
          <span
            className="i-ri-sun-line text-xl text-slate-400 hover:text-Blog-Blue-400 cursor-pointer dark:hidden"
            onClick={() => setTheme('dark')}
          />
          <span
            className="i-ri-moon-clear-line text-xl text-slate-400 hover:text-Blog-Blue-400 cursor-pointer hidden dark:block"
            onClick={() => setTheme('light')}
          />
          <Link href="https://github.com/Dnzzk2" target="_blank" className="flex items-center">
            <span className="i-fa-brands-github-alt text-xl cursor-pointer text-slate-400 hover:text-slate-500 dark:hover:text-slate-300" />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav

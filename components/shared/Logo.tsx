import Image from 'next/image'

interface LogoProps {
  className?: string
  height?: number
  width?: number
}

const Logo = (props: LogoProps) => {
  const height = props.height || 28
  const width = props.width || 28
  return (
    <>
      <Image
        src="/assets/logo.svg"
        alt="logo"
        height={height}
        width={width}
        className="dark:hidden object-cover"
      />
      <Image
        src="/assets/darkLogo.svg"
        alt="logo"
        height={height}
        width={width}
        className="hidden dark:block object-cover"
      />
    </>
  )
}

export default Logo

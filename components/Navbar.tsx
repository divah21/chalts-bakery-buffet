import Image from 'next/image'
import Link from 'next/link'

const navIcons = [
  { src: '/assets/icons/user.svg', alt: 'user' },
]

const Navbar = () => {
  return (
    <header className="w-full shadow-lg rounded-md">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image 
            src="/assets/images/logo.png"
            width={100}
            height={100}
            alt="logo"
          />

          <p className="nav-logo max-sm:hidden text-[32px]">
            Chalts<span className='text-primary '>BakeryBuffet</span>
          </p>
        </Link>

        <div className="flex items-center gap-5 ">
          <Link href="/CbbAdmin">
          {navIcons.map((icon) => (
            <Image 
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className="object-contain"
            />
          ))}
          </Link>
        
        </div>
      </nav>
    </header>
  )
}

export default Navbar
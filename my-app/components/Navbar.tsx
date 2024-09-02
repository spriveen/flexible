import { NavLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import AuthProviders from './AuthProviders';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from 'react';
import { UrlObject } from 'url';


const Navbar = () => {
    const session = null;
  return (
    <nav className='flexBetween navbar'>
        <div className='flex-1 flexStart gap-10'>
            <Link href="/">
            <Image
              src="/logo.svg"
              width={115}
              height={43}
              alt='Flexible'
            />
            </Link>
            <ul className='xl:flex hidden
            text-small gap-7'>
            {NavLinks.map((link: { href: string | UrlObject; key: Key | null | undefined; text: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => (
              <Link href={link.href} key={link.key}>
                {link.text}
              </Link>
            ))}

            </ul>
</div>
<div className='flex-center gap-4'>
    {session ? (
      <>
      UserPhoto
      <Link href="/create-project">
      Share Work
      </Link>
      </>
    ):(
      <AuthProviders/>
    )}
    
</div>
</nav> 
  )
}

export default Navbar
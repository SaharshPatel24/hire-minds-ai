import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import config from "@/public/config/config.json";
import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';


const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  if  (!isUserAuthenticated) redirect("/sign-in");
  return (
    <div className='root-layout'>
     <nav>
      <Link href="/" className='flex items-center gap-2'>
        <Image src={config.logo} alt={config.name} width={38} height={32} />
        <h2 className='text-primary-100'>{config.name}</h2>
      </Link>
     </nav>
      {children}
    </div>
  )
}

export default RootLayout

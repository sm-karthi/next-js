"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot password", href: "/forgot-password" }
]

function AuthLayout({ children }: { children: React.ReactNode }) {

    const pathName = usePathname();


    return (
        <>

            <div className='flex gap-4 flex-wrap'>

                {
                    navLinks.map((link) => {

                        const isActive = pathName === link.href

                        return (
                            <Link className={isActive ? "font-bold" : "text-blue-500"}
                                href={link.href} key={link.name}>{link.name}</Link>
                        )
                    })
                }


            </div>


            {children}


        </>
    )
}

export default AuthLayout
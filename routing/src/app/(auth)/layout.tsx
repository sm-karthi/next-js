import Link from 'next/link'
import React from 'react'

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot password", href: "/forgot-password" }
]

function AuthLayout({ children }: { children: React.ReactNode }) {


    return (
        <>

            <div className='flex gap-4 text-blue-500 flex-wrap'>

                {
                    navLinks.map((link) => {
                        return (
                            <Link href={link.href} key={link.name}>{link.name}</Link>
                        )
                    })
                }


            </div>


            {children}


        </>
    )
}

export default AuthLayout
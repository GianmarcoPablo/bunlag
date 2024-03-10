"use client"
import { IoPersonAddOutline } from 'react-icons/io5'
import { signOut } from 'next-auth/react'

export default function LogOutButton() {

    return (
        <div>
            <button
                onClick={() => signOut()}
                className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                <IoPersonAddOutline className="w-5 h-5 text-inherit" />
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">sign out</p>
            </button>
        </div>
    )
}

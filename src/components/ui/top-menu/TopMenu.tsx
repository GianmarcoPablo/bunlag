"use client"
import { useUiStore } from "@/store"
import Link from "next/link"
import { IoSearchOutline } from "react-icons/io5"

export default function TopMenu() {

    const openMenu = useUiStore(state => state.openSideMenu)


    return (
        <div className="flex px-5 py-3 justify-between items-center w-full bg-white">
            <div>
                <Link
                    href="/"
                >
                    <span className={`antialiased font-bold`}>Teslo</span>
                    <span>| Shop</span>
                </Link>
            </div>



            {/**Search cart Menu */}
            <div className="flex items-center">
                <Link
                    href="/search"
                    className="mx-2"
                >
                    <IoSearchOutline className="w--5 h-5" />
                </Link>


                <button
                    onClick={openMenu}
                    className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
                >
                    Menú
                </button>
            </div>

        </div>
    )
}
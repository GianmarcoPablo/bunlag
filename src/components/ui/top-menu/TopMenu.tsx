"use client"
import { useUiStore } from "@/store"
import Link from "next/link"
import { IoSearchOutline } from "react-icons/io5"

export default function TopMenu() {

    const openMenu = useUiStore(state => state.openSideMenu)


    return (
        <div className="flex px-5 py-3 justify-between items-center w-full bg-white">
            <div className="flex items-center">
                <Link
                    href="/"
                >
                    <span className={`antialiased font-bold`}>Teslo</span>
                    <span>| Shop</span>
                </Link>
            </div>


            <div
                className="flex items-center border border-gray-300 rounded-md  transition-all hover:border-gray-500 px-2"
            >
                <IoSearchOutline  size={20} />
                <input
                    type="text"
                    placeholder="Buscar empleo por puesto o palabra clave"
                    className="p-2 rounded-md w-96 outline-none "
                />
            </div>

            {/**Search cart Menu */}
            <div className="flex items-center">
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
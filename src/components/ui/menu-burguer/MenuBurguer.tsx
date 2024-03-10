"use client"
import { useUiStore } from "@/store";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonAddOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5";
import { signOut } from "next-auth/react";

export default function MenuBurguer() {

    const isSideMenuOpen = useUiStore(state => state.isSideMenuOpen)
    const closeMenu = useUiStore(state => state.closeSideMenu)
    const { data: session } = useSession()
    const isAuthenticated = !!session?.user

    return (
        <div>
            {/**Bg black */}

            {
                isSideMenuOpen && (
                    <div
                        className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
                    />
                )
            }
            {

                isSideMenuOpen && (
                    <div
                        className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
                    />
                )
            }

            {/**SideMenu */}



            <nav className={
                clsx(
                    "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
                    {
                        "translate-x-full": !isSideMenuOpen,
                    }
                )
            }>
                <IoCloseOutline
                    size={50}
                    className="absolute top-5 right-5 cursor-pointer"
                    onClick={closeMenu}
                />
                <div className="relative mt-14 ">
                    <IoSearchOutline
                        size={20}
                        className="absolute top-2 left-2"
                    />
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
                    />
                </div>


                {
                    isAuthenticated && (
                        <>
                            <Link
                                href="/dashboard/profile"
                                onClick={closeMenu}
                                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                            >
                                <IoPersonAddOutline size={30} />
                                <span className="ml-3 text-xl">Perfil</span>
                            </Link>
                            <Link
                                href="/dashboard/jobs"
                                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                            >
                                <IoTicketOutline size={30} />
                                <span className="ml-3 text-xl">Tus Trabajos</span>
                            </Link>
                            <Link
                                href="/dashboard/applications"
                                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                            >
                                <IoTicketOutline size={30} />
                                <span className="ml-3 text-xl">Tus Postulaciones</span>
                            </Link>
                        </>
                    )
                }




                {
                    isAuthenticated && (
                        <button
                            onClick={() => signOut()}
                            className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all w-full"
                        >
                            <IoLogOutOutline size={30} />
                            <span className="ml-3 text-xl">Cerrar Sesión</span>
                        </button>
                    )
                }

                {
                    !isAuthenticated && (
                        <Link
                            onClick={closeMenu}
                            href="/auth/login"
                            className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                        >
                            <IoLogInOutline size={30} />
                            <span className="ml-3 text-xl">Ingresar</span>
                        </Link>
                    )
                }

                {/* <>
                    <div className="w-full h-px bg-gray-200 my-10" />

                    <Link
                        href="/"
                        className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                    >
                        <IoShirtOutline size={30} />
                        <span className="ml-3 text-xl">Products</span>
                    </Link>
                    <Link
                        href="/"
                        className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                    >
                        <IoTicketOutline size={30} />
                        <span className="ml-3 text-xl">Ordenes</span>
                    </Link>
                    <Link
                        href="/"
                        className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                    >
                        <IoPeopleOutline size={30} />
                        <span className="ml-3 text-xl">Usuarios</span>
                    </Link>
                </> */}
            </nav>
        </div>
    )
}
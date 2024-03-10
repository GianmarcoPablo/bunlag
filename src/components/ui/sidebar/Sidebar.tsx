import { LogOutButton } from "@/components"
import SidebarItem from "./SidebarItem"
import { IoPersonOutline, IoBagHandleOutline, IoHomeOutline, IoScaleOutline, IoLogOutOutline } from "react-icons/io5"
import { getServerSession } from "next-auth"
import Link from "next/link"

const linksSidebar = [
    {
        icon: <IoHomeOutline className="w-5 h-5 text-inherit" />,
        title: 'Dashboard',
        path: '/dashboard'
    },
    {
        icon: <IoPersonOutline className="w-5 h-5 text-inherit" />,
        title: 'Perfil',
        path: '/dashboard/profile'
    },
    {
        icon: <IoBagHandleOutline className="w-5 h-5 text-inherit" />,
        title: 'Trabajos',
        path: '/dashboard/jobs'
    },
    {
        icon: <IoScaleOutline className="w-5 h-5 text-inherit" />,
        title: 'Postulaciones',
        path: '/dashboard/applications'
    },
]

export default async function Sidebar() {

    const session = await getServerSession()


    return (
        <aside className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
            <div className="relative border-b border-white/20">
                <div className="flex items-center gap-4 py-6 px-8">
                    <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">Material Tailwind Dashboard</h6>
                </div>
            </div>
            <div className="m-4">
                <ul className="mb-4 flex flex-col gap-1">
                    {
                        linksSidebar.map((link, index) => (
                            <SidebarItem key={index} title={link.title} path={link.path} icon={link.icon} />
                        ))
                    }
                </ul>
                <ul className="mb-4 flex flex-col gap-1">
                    <li className="mx-3.5 mt-4 mb-2">
                        <p className="block antialiased font-sans text-sm leading-normal text-white font-black uppercase opacity-75">auth pages</p>
                    </li>

                    {
                        session ? (
                            <>
                                <LogOutButton />
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/auth/login"
                                    className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
                                    <IoLogOutOutline className="w-5 h-5 text-inherit" />
                                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">sign in</p>
                                </Link>
                            </>
                        )
                    }
                </ul>
            </div>
        </aside>
    )
}

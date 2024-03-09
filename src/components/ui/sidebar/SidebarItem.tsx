"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

interface Props {
    title: string;
    path: string;
    icon: React.ReactNode;
}

export default function SidebarItem({ title, path, icon }: Props) {

    const pathname = usePathname();

    console.log(pathname, path)

    return (
        <li>
            <Link
                aria-current="page"
                href={path}
            >
                <button
                    className={clsx(
                        "middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize",
                        {
                            "bg-gradient-to-tr from-blue-600 to-blue-400 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85]": pathname === path,
                        }
                    )}
                    type="button"
                >
                    {icon}
                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                        {title}
                    </p>
                </button>
            </Link>
        </li>
    )
}

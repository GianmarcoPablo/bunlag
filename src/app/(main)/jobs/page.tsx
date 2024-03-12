import { ListJobs, MenuBurguer, SidebarFilters, TopMenu } from "@/components";

export default function MainJobsPage() {
    return (
        <div>
            <MenuBurguer />
            <TopMenu />
            {/**Dos columnas la primera va tomar en 33% y la segunda el 64%  con tailwind y grid*/}
            <main className="lg:max-w-[1750px] mx-auto mt-10">
                <div className="lg:grid lg:grid-cols-4 gap-10">
                    <SidebarFilters />
                    <ListJobs />
                </div>
            </main>
        </div>
    )
}

import { Navbar, Sidebar } from "@/components";
import { redirect } from "next/navigation";
import getSession from "@/helpers/get-session";

export default async function DashBoardLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

    const session = await getSession();
    if (!session) {
        redirect("/auth/login");
    }

    return (
        <div>
            <Sidebar />
            <div>
                <main className="p-4 xl:ml-80">
                    <Navbar />
                    {children}
                </main>
            </div>
        </div>
    );
}
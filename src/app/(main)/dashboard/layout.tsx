import { Navbar, Sidebar } from "@/components";




export default function DashBoardLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="min-h-screen bg-gray-50/50">
            <Sidebar />
            <div className="p-4 xl:ml-80">
                <Navbar />
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
}
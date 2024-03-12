import { MenuBurguer, TopMenu } from "@/components"

export default function Home() {


    return (
        <div className="min-h-screen">
            <MenuBurguer />
            <TopMenu />
            <main>
                <h1>Main Page</h1>
            </main >
        </div>
    );
}

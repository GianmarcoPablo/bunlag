import { About, Description, Experience } from "./ui"
import getSession from "@/helpers/get-session"
import Followers from "./ui/Followers"

export default async function DashboardProfilePage() {

    const session = await getSession()

    return (
        <>
            <div className="container mx-auto my-5 p-5">
                <div className="md:flex no-wrap md:-mx-2 ">
                    <div className="w-full md:w-3/12 md:mx-2">
                        <Description />
                        <div className="my-4"></div>
                        <Followers />
                    </div>
                    <div className="w-full md:w-9/12 mx-2 h-64">
                        <About />
                        <div className="my-4"></div>
                        <Experience />
                    </div>
                </div>
            </div>
        </>

    )
}

import getSession from "@/helpers/get-session"
import LoginForm from "./ui/LoginForm"
import { redirect } from "next/navigation"

export default async function LoginPage() {

    const session = await getSession()

    if (session) {
        redirect("/")
    }

    return (
        <div>
            <LoginForm />
        </div>
    )
}

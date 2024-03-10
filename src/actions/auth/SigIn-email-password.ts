import bcrypt from "bcryptjs"
import prisma from "@/lib/prisma"

export const signInEmailPassword = async (email: string, password: string) => {
    try {
        if (!email || !password) return null;

        const user = await prisma.user.findUnique({ where: { email } })
        if (!user) {
            const dbUser = await createUser(email, password)
            return dbUser
        }


        if (!bcrypt.compareSync(password, user!.password ?? "")) return null;


        return user
    } catch (error) {
        console.error("Error in signInEmailPassword", error)
        return null
    }
}

const createUser = async (email: string, password: string) => {

    try {
        const user = await prisma.user.create({
            data: {
                email,
                password: bcrypt.hashSync(password, 10),
                name: email.split("@")[0]
            }
        })
        return user
    } catch (error) {
        console.error("Error in createUser", error)
        return null
    }
}
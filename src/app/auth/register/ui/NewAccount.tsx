import { GitHubSvg, GoogleSvg, SvgImage } from "@/components";
import Link from "next/link";

export default function NewAccountForm() {
    return (
        <>
            <div className="flex h-screen">
                <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
                    <SvgImage />
                </div>
                <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
                    <div className="max-w-md w-full p-6">
                        <h1 className="text-3xl font-semibold mb-6 text-black text-center">
                            Crear Cuenta
                        </h1>
                        <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
                            Unete y encuentra el empleo de tus sueños
                        </h1>
                        <div className="mt-4 flex flex-col lg:flex-row items-center justify-between">
                            <GoogleSvg />
                            <GitHubSvg />
                        </div>
                        <div className="mt-4 text-sm text-gray-600 text-center">
                            <p>
                                o ingresa con tus credenciales
                            </p>
                        </div>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="text" className="block text-sm font-medium text-gray-700">Nombre</label>
                                <input type="text" id="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="text" id="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Repite tú Password</label>
                                <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">
                                    Crear Cuenta
                                </button>
                            </div>
                        </form>
                        <div className="mt-4 text-sm text-gray-600 text-center">
                            <p>¿Ya tienes una cuenta? {""}
                                <Link href="/auth/new-account" className="text-black hover:underline">
                                    Inicia Sesión
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

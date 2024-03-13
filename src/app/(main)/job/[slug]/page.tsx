import data from "@/data/seed.json"
import { MenuBurguer, TopMenu } from "@/components"
import Image from "next/image"
import { IoWarningOutline, IoHeartOutline, IoBusinessOutline, IoCubeOutline, IoCalendarOutline, IoLocationOutline, IoBookmarkOutline } from "react-icons/io5"
import { FiDollarSign } from "react-icons/fi";

interface Props {
    params: {
        slug: string
    }
}

export default function JobPage({ params }: Props) {

    const { slug } = params

    const job = data.find(job => job.id === slug)


    return (
        <div>
            <div className="min-h-screen">
                <MenuBurguer />
                <TopMenu />

                <main className="lg:max-w-[1750px] mx-24  mt-10">
                    <div className="flex bg-white p-5 items-center justify-between shadow-lg">
                        <div className="flex items-center gap-4 rounded-lg">
                            <Image
                                src={job!.image}
                                alt={`${job?.company} logo`}
                                width={100}
                                height={100}
                            />
                            <div>
                                <h2 className="text-blue-700 font-bold text-xl">{job?.jobTitle}</h2>
                                <p className="text-gray-400 uppercase">{job?.company}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <IoWarningOutline className="cursor-pointer" size={30} />
                            <IoHeartOutline className="cursor-pointer" size={30} />
                        </div>
                    </div>
                    <div className="flex gap-8">
                        <div className="lg:max-w-[1120px] rounded-lg shadow-lg mt-8 bg-white p-4 ">
                            <div className="flex gap-8">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <IoCalendarOutline size={22} />
                                        <span className="text-lg">Publicado ayer</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <IoLocationOutline size={22} />
                                        <span className="text-lg">{job?.location}</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <IoBusinessOutline size={22} />
                                        <span className="text-lg">{job?.modality}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <IoBookmarkOutline size={22} />
                                        <span className="text-lg">Señior</span>
                                    </div>
                                </div>


                                <div className="flex justify-end flex-1">
                                    <p className="text-lg">Rango Salarial: <span> $1500 - $2000</span> </p>
                                </div>
                            </div>
                            <div className="border my-5 border-blue-700 flex-1" />
                            <p>
                                {job?.description}
                            </p>

                        </div>

                        <div className="bg-white p-4 mt-8 shadow-lg flex-1">
                            <div
                                className="rounded-lg border-2 border-gray-200  flex items-center gap-4 px-3 focus-within:border-blue-500"
                            >
                                <FiDollarSign size={20} />
                                <input
                                    type="text"
                                    placeholder="Ingresa tu sueldo bruto pretendido"
                                    className="w-full py-3 text-lg font-semibold rounded-lg  focus:outline-none "
                                />
                            </div>
                            <p className="text-sm text-gray-400 mt-2">
                                Este campo solo acepta carácteres numéricos. Ver el salario promedio pretendido Bruto por área.
                            </p>

                            <button
                                className="bg-blue-800 text-white w-full py-3 rounded-lg mt-4 text-xl font-semibold focus:outline-none  hover:bg-blue-600 transition-colors"
                            >
                                Postular
                            </button>
                        </div>

                    </div>
                    <p
                        className="flex justify-end text-gray-400 mt-4 text-sm italic"
                    >
                        El contenido de este aviso es propiedad del anunciante. Los requisitos de la posición son definidos y administrados por el anunciante sin que Bumeran sea responsable por ello.
                    </p>
                </main >
            </div>
        </div>
    )
}

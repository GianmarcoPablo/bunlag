import { IoLocationOutline, IoBusinessOutline } from "react-icons/io5"
import data from "@/data/seed.json"
import Link from "next/link"

export default function ListJobs() {

    const countJobs = data.length

    return (
        <div className="col-span-3">
            <p>
                <span className="text-orange-700 font-bold ">{countJobs}</span>  ofertas de empleo en Perú
            </p>
            <div >
                {
                    data.map(job => (
                        <Link
                            href={`/job/${job.id}`}
                            key={job.id}
                        >
                            <div
                                className="bg-white p-4 rounded-md shadow-md my-4 cursor-pointer  hover:bg-gray-50 hover:shadow-xl  border-orange-500 border-l-4 transition-all"
                            >
                                <div className="flex items-center gap-5">
                                    <div
                                        className="w-5/6"
                                    >
                                        <p className="text-xl text-blue-700 font-bold">
                                            {job.jobTitle}
                                        </p>
                                        <p>{job.company}</p>
                                        <p>
                                            {job.description.length > 100 ? job.description.slice(0, 350) + "..." : job.description}
                                        </p>
                                    </div>
                                    <div
                                    >
                                        <p
                                            className="flex items-center gap-2"
                                        >
                                            <IoLocationOutline size={20} />
                                            {job.location}
                                        </p>
                                        <p
                                            className="flex items-center gap-2"
                                        >
                                            <IoBusinessOutline size={20} />
                                            {job.modality}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

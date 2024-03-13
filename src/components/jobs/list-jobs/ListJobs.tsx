import { IoLocationOutline, IoBusinessOutline, IoBookmarkOutline, IoHeartCircleOutline } from "react-icons/io5"
import data from "@/data/seed.json"
import Link from "next/link"

export default function ListJobs() {

    const countJobs = data.length

    console.log(JSON.parse(JSON.stringify(data)))

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
                                className="bg-white py-4 px-6 rounded-md shadow-md my-4 cursor-pointer  hover:bg-gray-50 hover:shadow-xl  border-orange-500 border-l-8 transition-all"
                            >
                                <div className="grid grid-cols-7 items-center gap-5">
                                    <div
                                        className="grid col-span-5"
                                    >
                                        <p className="text-xl text-blue-700 font-bold">
                                            {job.jobTitle}
                                        </p>
                                        <p>{job.company}</p>
                                        <p>
                                            {job.description.length > 100 ? job.description.slice(0, 300) + "..." : job.description}
                                        </p>
                                    </div>
                                    <div
                                        className="grid col-span-2 items-center gap-4"
                                    >
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p
                                                    className="flex items-center gap-2 mb-2"
                                                >
                                                    <IoLocationOutline size={25} />
                                                    {job.location.length > 20 ? job.location.slice(0, 20) + "..." : job.location}
                                                </p>
                                                <p
                                                    className="flex items-center gap-2"
                                                >
                                                    <IoBusinessOutline size={25} />
                                                    {job.modality}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <IoHeartCircleOutline size={25} />
                                                <IoBookmarkOutline size={25} />
                                            </div>
                                        </div>
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

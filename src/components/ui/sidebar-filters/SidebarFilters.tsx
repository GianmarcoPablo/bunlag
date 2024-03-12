import { IoAddOutline, IoCalendarOutline, IoCubeOutline, IoLocationOutline, IoBusinessOutline, IoLayersOutline, IoHourglassOutline } from "react-icons/io5";
import Link from "next/link";

export default function SidebarFilters() {
    return (
        <aside className="col-span-1">
            <Link
                href="/dashboard/jobs/create"
                className="border bg-white font-bold text-lg border-rose-700 rounded-md p-2 text-rose-700 hover:bg-rose-50  cursor-pointer transition-colors flex items-center justify-center w-full mb-2"
            >
                <span className="flex items-center gap-2">
                    <IoAddOutline size={20} />
                    <p>Crea un empleo</p>
                </span>
            </Link>

            <div className="bg-white rounded p-4">
                <div className="p-2">
                    <label htmlFor="published" className="block text-lg font-medium text-gray-700">
                        <span className="flex items-center gap-2">
                            <IoCalendarOutline size={20} />
                            Fecha de publicación
                        </span>
                    </label>
                    <select
                        id="published"
                        name="published"
                        className="mt-1 block w-full py-2 px-3 border border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500"
                    >
                        <option value="">-- Selecione --</option>
                        <option value="1">Hoy</option>
                        <option value="2">Menor a 2 días</option>
                        <option value="3">Menor a 3 días</option>
                        <option value="4">Menor a 4 días</option>
                        <option value="5">Menor a 5 días</option>
                        <option value="6">Menor a 6 días</option>
                        <option value="7">Menor a 1 semana</option>
                        <option value="8">Menor a 15 días</option>
                        <option value="8">Menor a 1 mes</option>
                    </select>
                </div>
                <div className="p-2">
                    <label htmlFor="area" className="block text-lg font-medium text-gray-700">
                        <span className="flex items-center gap-2">
                            <IoCubeOutline size={20} />
                            Area
                        </span>
                    </label>
                    <select
                        id="area"
                        name="area"
                        className="mt-1 block w-full py-2 px-3 border border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500"
                    >
                        <option value="">-- Selecione --</option>
                        <option value="1">Desarrollo de software</option>
                        <option value="2">Diseño</option>
                        <option value="3">Marketing</option>
                        <option value="4">Ventas</option>
                    </select>
                </div>
                <div className="p-2">
                    <label htmlFor="department" className="block text-lg font-medium text-gray-700">
                        <span className="flex items-center gap-2">
                            <IoLocationOutline size={20} />
                            Departamento
                        </span>
                    </label>
                    <select
                        id="department"
                        name="department"
                        className="mt-1 block w-full py-2 px-3 border border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500"
                    >
                        <option value="">-- Selecione --</option>
                        <option value="1">Lima Metropolitana</option>
                        <option value="2">Arequipa</option>
                        <option value="3">Cusco</option>
                        <option value="4">Loreto</option>
                        <option value="5">Piura</option>
                        <option value="6">Ica</option>
                    </select>
                </div>
                <div className="p-2">
                    <label htmlFor="modality" className="block text-lg font-medium text-gray-700">
                        <span className="flex items-center gap-2">
                            <IoBusinessOutline size={20} />
                            Modalidad
                        </span>
                    </label>
                    <select
                        id="modality"
                        name="modality"
                        className="mt-1 block w-full py-2 px-3 border border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500"
                    >
                        <option value="">-- Selecione --</option>
                        <option value="1">Presencial</option>
                        <option value="2">Remoto</option>
                        <option value="3">Hibrido</option>
                    </select>
                </div>
                <div className="p-2">
                    <label htmlFor="joblevel" className="block text-lg font-medium text-gray-700">
                        <span className="flex items-center gap-2">
                            <IoLayersOutline size={20} />
                            Nivel Laboral
                        </span>
                    </label>
                    <select
                        id="joblevel"
                        name="joblevel"
                        className="mt-1 block w-full py-2 px-3 border border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500"
                    >
                        <option value="">-- Selecione --</option>
                        <option value="1">Trainee / Practicante</option>
                        <option value="2">Junior</option>
                        <option value="2">Jefe / Supervisor / Responsable</option>
                        <option value="3">Semi Senior</option>
                        <option value="4">Senior</option>
                        <option value="5">Gerencia / Alta Gerencia</option>
                        <option value="6">Sin Experiencia</option>
                    </select>
                </div>
                <div className="p-2">
                    <label htmlFor="Workload" className="block text-lg font-medium text-gray-700">
                        <span className="flex items-center gap-2">
                            <IoHourglassOutline size={20} />
                            Carga Horaria
                        </span>
                    </label>
                    <select
                        id="Workload"
                        name="Workload"
                        className="mt-1 block w-full py-2 px-3 border border-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500"
                    >
                        <option value="">-- Selecione --</option>
                        <option value="1">Part Time</option>
                        <option value="2">Full Time</option>
                        <option value="3">Por Horas</option>
                        <option value="4">Por Proyecto</option>
                    </select>
                </div>

            </div>
        </aside >
    )
}

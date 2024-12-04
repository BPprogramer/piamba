import { Link, useParams } from "react-router-dom"
import { Dialog } from '@headlessui/react'
import { useState } from 'react'

import { projectsDB } from "../data/db"
import { ArrowsPointingOutIcon } from "@heroicons/react/24/solid";

import { resetScroll } from "../utilities/resetScroll";


export default function Project() {
    let [isOpen, setIsOpen] = useState(false)
    const [imageModal, setImageModal] = useState('')
    const params = useParams();
    const projectId = params.projectId;
    const project = projectsDB.filter(project => project.id === projectId)[0];

    const projectLines= project.description.split('\n')



    resetScroll()


    return (
        <>
            <section className="mt-10">
                <div className="container mx-auto px-6 max-w-screen-xl">
                    <div className="flex justify-between items-center mb-10">
                        <h2 className="text-4xl  font-extrabold   text-blue-400 capitalize">
                            {project.name}
                        </h2>
                        <Link to={'/projects'} className="text-lg uppercase text-white bg-slate-900 hover:bg-black transition-colors px-2 py-1 rounded font-bold">
                            Volver a proyectos
                        </Link>
                    </div>
                    <div className="flex flex-col md:flex-row gap-10 ">
                        {/* Sección de Descripción */}
                        <div className="w-full md:w-4/5 h-[500px] overflow-y-scroll scrollbar-hide">
                            <div className="">
                                
                                <p className="text-white text-lg leading-relaxed">
                                    {projectLines.map((line, index) => (
                                        <p key={index} className="mt-4">{line}</p> // Muestra cada línea en un <p> separado
                                    ))}
                                </p>
                                <p className="text-white text-lg leading-relaxed mt-4">
                                    A continuación te presento algunos pantallazos del proyecto
                                </p>
                            </div>
                            <div className="mt-10">

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {project.img.slice(1).map((img, index) => (
                                        <div
                                            key={index}
                                            className="bg-white shadow-lg rounded-lg overflow-hidden group cursor-pointer hover:opacity-80 transition-all duration-300"
                                        >
                                            {/* Imagen con gradiente y efecto zoom */}
                                            <div
                                                className="relative w-full h-70 z-0 overflow-hidden group"
                                                onClick={() => {
                                                    setIsOpen(!isOpen)
                                                    setImageModal(img.name)
                                                }
                                                }
                                            >
                                                <img
                                                    src={img.name}
                                                    alt={project.name}
                                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                                />
                                                {/* Gradiente */}
                                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300"></div>

                                                {/* Brillo al pasar el mouse */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40 group-hover:opacity-30 transition-opacity duration-500"></div>

                                                {/* Ícono de lupa */}
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <ArrowsPointingOutIcon className="w-10 h-10 text-white text-center" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>


                            </div>

                        </div>



                        {/* Sección de Tecnologías */}
                        <div className="w-full md:w-1/5">
                            <div className="bg-slate-800 rounded-lg p-6 shadow-md">
                                <h3 className="text-xl font-semibold text-white mb-4">
                                    Tecnologías Utilizadas
                                </h3>
                                <ul className="w-full space-y-2">
                                    {project.technologys.map((technology, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-4 bg-slate-700 p-1 rounded-md hover:bg-slate-600 transition"
                                        >
                                            <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
                                                <img
                                                    src={technology.img}
                                                    alt={technology.name}
                                                    className="w-6 h-6"
                                                />
                                            </div>
                                            <span className="text-white font-medium">{technology.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>



                </div>
            </section>


            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 w-screen overflow-y-auto p-4 bg-black bg-opacity-70">
                    <div className="flex min-h-full items-center justify-center">
                        <Dialog.Panel className="max-w-screen-lg max-h-screen bg-transparent p-0">
                            <img
                                src={imageModal}
                                alt="Fullscreen"
                                className="w-full h-auto object-contain filter brightness-90 hover:brightness-100 transition-all duration-300"
                            />
                        </Dialog.Panel>
                    </div>
                </div>
            </Dialog>



        </>
    )
}

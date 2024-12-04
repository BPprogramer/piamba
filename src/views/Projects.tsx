import { MagnifyingGlassPlusIcon } from "@heroicons/react/24/outline";
import { projectsDB } from "../data/db";




import { useNavigate } from "react-router-dom";


export default function Projects() {
    const navigate = useNavigate();



    return (
        <>
            <section className="mt-10">
                <div className="container mx-auto px-6 max-w-screen-xl">
                    <h2 className="text-4xl  font-extrabold mb-10  text-blue-400">
                        Proyectos destacados
                    </h2>
                    <p className="text-white">
                        Descubre una selección de proyectos que he desarrollado, desde la conceptualización inicial hasta su despliegue final
                    </p>

                    <div className="mt-10">

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
                            {projectsDB.map((project) => (
                                <div
                                    key={project.id}
                                    className="bg-white shadow-lg rounded-lg overflow-hidden group cursor-pointer hover:opacity-60"
                           
                                    onClick={() => navigate(`/projects/project/${project.id}`)}
                                >
                                    {/* Imagen con gradiente y efecto zoom */}
                                    <div className="relative w-full h-80 z-0 overflow-hidden group">
                                        {/* Imagen con zoom */}
                                        <img
                                            src={project.img[0].name}
                                            alt={project.name}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                        />
                                        {/* Gradiente */}
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-opacity duration-1000"></div>

                                        {/* Ícono de lupa */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                                            <MagnifyingGlassPlusIcon className="w-20 h-20 text-white text-center " />


                                        </div>
                                    </div>

                                    {/* Contenido del card */}
                                    <div className="bg-gray-900 p-4 text-center ">
                                        <h3 className=" text-lg font-bold uppercase text-white truncate z-10  border border-b border-blue-300">
                                            {project.name}
                                        </h3>

                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            
        </>
    )
}

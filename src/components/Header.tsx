
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";


export default function Header() {

    const location = useLocation();
    const currentPage = location.pathname;

    const [navShow, setNavShow] = useState(false);
    return (
        <header className="bg-cyan-800 shadow-md">
            <div className="container mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 px-6 max-w-screen-xl">
                {/* Logo y menú hamburguesa */}
                <div className="flex items-center justify-between w-full sm:w-auto">
                    <Link to={'/'}>
                        <h1 className={`text-4xl font-bold text-white transition-all  cursor-pointer hover:text-cyan-300 ${currentPage == '/' ? 'text-cyan-300' : ''} border border-blue-400`}>
                            B<span className="">P</span>
                        </h1>
                    </Link>

                    <div className="sm:hidden">
                        <Bars3Icon
                            className="cursor-pointer h-6 w-6 text-white font-bold"
                            onClick={() => setNavShow(!navShow)}
                        />
                    </div>
                </div>

                {/* Navegación para pantallas grandes */}
                <nav className="hidden sm:block">
                    <ul className="flex space-x-6 text-white font-bold uppercase">
                        <li>
                            <Link to="/about" className={`hover:text-cyan-500 ${currentPage == '/about' ? 'text-cyan-300' : ''} transition duration-300`}>
                                Sobre mí
                            </Link>
                        </li>
                        <li>
                            <Link to="/skills" className={`hover:text-cyan-500 ${currentPage == '/skills' ? 'text-cyan-300' : ''} transition duration-300`}>
                                Habilidades
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" className={`hover:text-cyan-500 ${currentPage == '/projects' ? 'text-cyan-300' : ''} transition duration-300`}>
                                Proyectos
                            </Link>
                        </li>
                     

                     {/*    <li>
                            <a href="/contact" className={`hover:text-cyan-500 ${currentPage == '/contact' ? 'text-cyan-300' : ''} transition duration-300`}>
                                Contacto
                            </a>
                        </li> */}
                    </ul>
                </nav>
            </div>

            {/* Navegación para pantallas pequeñas con animación */}
            <div
                className={`sm:hidden bg-gray-100 overflow-hidden transition-all duration-500 ease-in-out ${navShow ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <nav>
                    <ul className="flex flex-col gap-2 items-center text-gray-600 py-2 font-bold">
                        <li>
                            <Link to="/about" className={`hover:text-cyan-500 ${currentPage == '/about' ? 'text-cyan-300' : ''} transition duration-300`}>
                                Sobre mí
                            </Link>
                        </li>
                        <li>
                            <Link to="/skills" className={`hover:text-cyan-500 ${currentPage == '/skills' ? 'text-cyan-300' : ''} transition duration-300`}>
                                Habilidades
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" className={`hover:text-cyan-500 ${currentPage == '/projects' ? 'text-cyan-300' : ''} transition duration-300`}>
                                Proyectos
                            </Link>
                        </li>
                  {/*       <li>
                            <a href="/contact" className={`hover:text-cyan-500 ${currentPage == '/contact' ? 'text-cyan-300' : ''} transition duration-300`}>
                                Contacto
                            </a>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

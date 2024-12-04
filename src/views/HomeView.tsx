import { resetScroll } from "../utilities/resetScroll"



export default function HomeView() {
  resetScroll()
  return (
    <>
      <div className="flex items-center justify-center mt-40 text-white text-center font-bold">
        <div>
          <h1 className="text-6xl text-blue-400">
            Bryan Alexander Piamba Benavides
          </h1>
          <h1 className="text-4xl">
            Desarrollador Web Full-Stack
          </h1>
          <p className="mt-1 text-xl">
            Con más de 4 años de experiencia
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <div>
              <a href="https://wa.me/+573215226146" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-green-500">
                <i className="fab fa-whatsapp text-4xl"></i> {/* Ícono de WhatsApp */}
                <span className="text-white text-xl">+573215226146</span> {/* Número */}
              </a>
            </div>

            <div>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=piambabryan95@gmail.com" target="_blank" className="flex items-center space-x-2 text-red-500">
                <i className="fas fa-envelope text-4xl"></i> {/* Ícono de correo */}
                <span className="text-white text-xl">piambabryan95@gmail.com</span> {/* Dirección de correo */}
              </a>
            </div>

            {/*  <a href="mailto:piambabryan95@gmail.com" className="text-blue-500 text-3xl">
              <i className="fas fa-envelope"></i> Correo
            </a> */}
          </div>
        </div>

      </div>






    </>
  )
}

//   {/* Fondo de la imagen */}
{/* <div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: 'url(/bg.jpg)' }}
></div> */}

// {/* Capa oscura encima de la imagen para mayor contraste */}
// <div className="absolute inset-0 bg-black bg-opacity-50"></div>

// {/* Contenido principal */}
// <div className="text-center px-6 h-screen flex items-center justify-center flex-col relative z-10">
//   <h1 className="text-6xl font-bold mb-4 text-white">Desarrollador web Full Stack</h1>
//   <p className="text-xl text-white">Con 3-4 años de experiencia en el mundo del desarrollo web</p>
//   <div className="mt-5">
//     <Link
//       to={'/about'}
//       className="bg-black hover:bg-gray-800 px-2 py-1 rounded-sm uppercase font-bold text-white transition-all duration-300"
//     >
//       Sobre mí
//     </Link>
//   </div>
// </div>
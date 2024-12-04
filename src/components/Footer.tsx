

export default function Footer() {
    const currntYear = new Date().getFullYear()
    return (
        <footer className="bg-gray-800 text-white text-sm p-1 mt-20 text-center">
             <div className="container mx-auto px-6 max-w-screen-xl">
        <div className=" flex flex-wrap gap-5 py-10 px-6 opacity-20 rounded-sm">
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full  ">
            <img
              src={'/icons/php.svg'}
              alt={'php'}
              className="w-12 h-12"
            />
          </div>
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full  ">
            <img
              src={'/icons/laravel.svg'}
              alt={'php'}
              className="w-12 h-12"
            />
          </div>
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full  ">
            <img
              src={'/icons/js.svg'}
              alt={'php'}
              className="w-12 h-12"
            />
          </div>
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full  ">
            <img
              src={'/icons/react.svg'}
              alt={'php'}
              className="w-12 h-12"
            />
          </div>
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full  ">
            <img
              src={'/icons/node.svg'}
              alt={'php'}
              className="w-12 h-12"
            />
          </div>
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full  ">
            <img
              src={'/icons/express.svg'}
              alt={'php'}
              className="w-12 h-12"
            />
          </div>
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full  ">
            <img
              src={'/icons/mysql.svg'}
              alt={'php'}
              className="w-12 h-12"
            />
          </div>
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full  ">
            <img
              src={'/icons/postgresql.svg'}
              alt={'php'}
              className="w-12 h-12"
            />
          </div>
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full  ">
            <img
              src={'/icons/mongodb.svg'}
              alt={'php'}
              className="w-12 h-12"
            />
          </div>
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full  ">
            <img
              src={'/icons/html5.svg'}
              alt={'php'}
              className="w-12 h-12"
            />
          </div>
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full  ">
            <img
              src={'/icons/css3.svg'}
              alt={'php'}
              className="w-12 h-12"
            />
          </div>
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full  ">
            <img
              src={'/icons/sass.svg'}
              alt={'php'}
              className="w-12 h-12"
            />
          </div>
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full  ">
            <img
              src={'/icons/bootstrap.svg'}
              alt={'php'}
              className="w-12 h-12"
            />
          </div>
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full  ">
            <img
              src={'/icons/tailwindcss.svg'}
              alt={'php'}
              className="w-12 h-12"
            />
          </div>
        </div>
      </div>
            <p>Todos los derechos reservados <span className="text-blue-500 font-bold">{currntYear}</span></p>
        </footer>
    )
}

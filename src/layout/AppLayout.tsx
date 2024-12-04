import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { resetScroll } from "../utilities/resetScroll";



export default function AppLayout() {

resetScroll()


  return (
    <>



      <div className="min-h-screen flex flex-col bg-gradient-to-r from-slate-900 to-slate-700" >
        {/* Header */}
        <div className="sticky top-0 z-50">
          <Header />
        </div>

        {/* Contenido principal */}
     
        <div className="s flex-grow bg-gradient-to-r from-slate-900 to-slate-700 " >
          <Outlet />
        </div>


        {/* Footer */}
        <Footer />
       
      </div>

    </>
  );
}

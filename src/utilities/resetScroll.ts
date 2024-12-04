import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export const resetScroll = ()=>{
    const location = useLocation();

    useEffect(() => {
      // Esto asegura que la página se desplace hasta el inicio cuando cambias de ruta
      window.scrollTo(0, 0);
    }, [location]); 
}
import { useEffect, useRef } from "react";


/**
 * Detecta evento de click en cualquier parte del documento HTML
 * @param {funtion} callbackOutside se invoca cada que se hace click fuera del elemento referenciado
 * @param {boolean} alwaysActiveEvent mientras sea true estara activo el evento para detectar clicks
 * @returns {React.RefObject} React.RefObject
 */
export default function useOutsideClick<T extends HTMLElement>(callbackOutside:() => void, alwaysActiveEvent?:boolean):React.RefObject<T>|null{
    const ref = useRef<T>(null)
    
    useEffect(() => {
        function handleMouseDown(event:MouseEvent){
          // se valida que el elemento en el que se hizo
          // click no sea hijo del elemento referenciado
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callbackOutside()
            }
        }
        // este evento se activa cada que se haga click en cualquier parte de la
        // pantalla
        document.addEventListener("mousedown", handleMouseDown)

        if (!alwaysActiveEvent) {
          document.removeEventListener("mousedown", handleMouseDown)
        }
      return () => {
        document.removeEventListener("mousedown", handleMouseDown)
      };
    }, [alwaysActiveEvent]);

    return ref

}
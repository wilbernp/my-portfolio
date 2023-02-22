import IGlobalEvent from "@/types/globalEvent";
import { createContext } from "react";


interface DefaultValueContext {
    globalEvent:IGlobalEvent,
    setIsButton: (isButton:boolean) => void
}

export const initialStateGlobalEvent:IGlobalEvent={
    isButtonClick:false
}

export const GlobalEventContext = createContext<DefaultValueContext>({
    globalEvent:initialStateGlobalEvent,
    setIsButton(isButtonClick:boolean) {},
})
import { useContext } from "react";
import { GlobalEventContext } from "./globalEventContext";

export default function useGlobalEventContext(){
    return useContext(GlobalEventContext)
}
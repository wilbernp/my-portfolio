
import IGlobalEvent from '@/types/globalEvent';
import React, { useState } from 'react';
import { GlobalEventContext, initialStateGlobalEvent } from './globalEventContext';
interface IContextProviderProps {
    children: React.ReactNode
}
export default function GlobalEventProvider({ children }: IContextProviderProps) {
    const [globalEvent, setGlobalEvent] = useState<IGlobalEvent>(initialStateGlobalEvent)

    function setIsButton(isButtonClick: boolean) {
        setGlobalEvent(prev => ({
            ...prev,
            isButtonClick
        }))
    }

    return (
        <GlobalEventContext.Provider
            value={{
                globalEvent,
                setIsButton
            }}
        >

        </GlobalEventContext.Provider>
    );
}

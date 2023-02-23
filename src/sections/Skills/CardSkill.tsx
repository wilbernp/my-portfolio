import { ISkill } from '@/types/skill'
import React from 'react'

export default function CardSkill({label, href}:ISkill) {
    return(
        <div className="flex flex-col items-center border-2 border-blue-400 w-[5.6rem] py-2 px-2">
        {/* icono */}
        <div className="w-8 h-8 bg-white mb-3"></div>
        {/* nombre de la habilidad */}
        <p className="text-white text-xs text-center">{label}</p>
      </div>
    )
}

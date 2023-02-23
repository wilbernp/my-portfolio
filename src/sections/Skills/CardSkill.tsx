import { ISkill } from '@/types/skill'
import { InlineIcon } from '@iconify/react';

export default function CardSkill({ label, icon, href, color }: ISkill) {
  // if ( typeof icon === "string") {
  //   console.log("icon ", icon)
  //   return(
  //     <img src={icon} alt="" />
  //   )
  // }
  if (href) {
    return (
      <a
        href={href}
        className="flex flex-col items-center border-2 border-blue-400 w-[5.6rem] rounded-lg py-2 px-2">
        {/* icono */}
        <div className="flex justify-center items-center p-[0.20rem] rounded-md bg-white mb-3">
          <InlineIcon
            icon={icon}
            color={color}
            width="32"
            height="32"
            className="text-3xl"
          />
        </div>
        {/* nombre de la habilidad */}
        <p className="text-white text-xs text-center">{label}</p>
      </a>
    )
  }
  return (
    <div className="flex flex-col items-center border-2 border-blue-400 w-[5.6rem] rounded-lg py-2 px-2">
      {/* icono */}
      <div className="flex justify-center items-center p-[0.20rem] rounded-md bg-white mb-3">
        <InlineIcon
          icon={icon}
          color={color}
          width="32"
          height="32"
          className="text-3xl"
        />
      </div>
      {/* nombre de la habilidad */}
      <p className="text-white text-xs text-center">{label}</p>
    </div>
  )
}

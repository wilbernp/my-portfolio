import { ISkill } from '@/types/skill'
import IconRender from './IconRender';

export default function CardSkill({ label, icon, href, color }: ISkill) {

  if (href) {
    return (
      <a
        href={href}
        className="flex flex-col items-center border-2 border-primary w-[5.6rem] rounded-lg py-2 px-2">
        {/* icono */}
        <div className="flex justify-center items-center p-[0.20rem] rounded-md bg-neutral-200 mb-3">
          <IconRender icon={icon} color={color} />
        </div>
        {/* nombre de la habilidad */}
        <p className="text-neutral-200 text-xs text-center">{label}</p>
      </a>
    )
  }
  return (
    <div className="flex flex-col items-center border-2 border-primary w-[5.6rem] rounded-lg py-2 px-2">
      {/* icono */}
      <div className="flex justify-center items-center p-[0.20rem] rounded-md bg-neutral-200 mb-3">
        <IconRender icon={icon} color={color} />
      </div>
      {/* nombre de la habilidad */}
      <p className="text-neutral-200 text-xs text-center">{label}</p>
    </div>
  )
}

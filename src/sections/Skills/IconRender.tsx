import { IconType } from '@/types/skill';
import { InlineIcon } from '@iconify/react';

interface IconRenderProps {
    icon:IconType;
    color?:string;
}
export default function IconRender({icon, color}:IconRenderProps) {
    if (typeof icon === "string") {
        console.log("icon ", icon)
        return <img className='w-8' src={icon} />
      }
      return <InlineIcon
            icon={icon}
            color={color}
            width="30"
            height="30"
            className="text-3xl"
          />
}

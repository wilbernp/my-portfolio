import { ISkill } from "@/types/skill";
import gitIcon from '@iconify/icons-mdi/git';
import githubIcon from '@iconify/icons-mdi/github';
import linuxIcon from '@iconify/icons-flat-color-icons/linux';
import vsCode from '@iconify/icons-mdi/vs-code';
import vercelDark from '@iconify/icons-skill-icons/vercel-dark';
export const toolsData:ISkill[] = [
    {
        label:"Git",
        href:"#",
        icon:gitIcon,
        color:"#F1502F"
    },
    {
        label:"GitHub",
        href:"#",
        icon:githubIcon
    },
    {
        label:"Linux",
        href:"#",
        icon:linuxIcon
    },
    {
        label:"VS Code",
        href:"#",
        icon:vsCode,
        color:"#0078d7"
    },
    {
        label:"Vercel",
        href:"#",
        icon:vercelDark
    },
    
]
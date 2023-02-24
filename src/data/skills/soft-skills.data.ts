import { ISkill } from "@/types/skill";
import fileTypeHtml from '@iconify/icons-vscode-icons/file-type-html';
import peopleTeam16Filled from '@iconify/icons-fluent/people-team-16-filled';
import adaptationIcon from "@/assets/icons/adaptation.svg"
import activeListeningIcon from "@/assets/icons/active-listening.svg"
import problemSolvingIcon from "@/assets/icons/problem-solving.svg"


export const softSkillsData:ISkill[] = [
    {
        label:"Trabajo en equipo",
        icon:peopleTeam16Filled,
        color:"#000000"
    },
    {
        label:"Facilidad de adaptación",
        icon:adaptationIcon
    },
    {
        label:"Escucha activa",
        icon:activeListeningIcon
    },
    {
        label:"Resolución de problemas",
        icon:problemSolvingIcon
    },
]
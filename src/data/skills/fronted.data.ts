import { ISkill } from '@/types/skill';
import fileTypeHtml from '@iconify/icons-vscode-icons/file-type-html';
import fileTypeCss from '@iconify/icons-vscode-icons/file-type-css';
import fileTypeTailwind from '@iconify/icons-vscode-icons/file-type-tailwind';
import javascriptIcon from '@iconify/icons-logos/javascript';
import fileTypeTypescriptOfficial from '@iconify/icons-vscode-icons/file-type-typescript-official';
import fileTypeReactjs from '@iconify/icons-vscode-icons/file-type-reactjs';
import brandReactNative from '@iconify/icons-tabler/brand-react-native';
import reduxIcon from '@iconify/icons-logos/redux';
import nextjsIcon from '@iconify/icons-logos/nextjs';


export const frontendData:ISkill[] = [
    {
        label:"HTML5",
        href:"#",
        icon:fileTypeHtml
    },
    {
        label:"CSS3",
        href:"#",
        icon:fileTypeCss
    },
    {
        label:"Tailwind CSS",
        href:"#",
        icon:fileTypeTailwind
    },
    {
        label:"JavaScript",
        href:"#",
        icon:javascriptIcon
    },
    {
        label:"TypeScript",
        href:"#",
        icon:fileTypeTypescriptOfficial
    },
    {
        label:"Reactjs",
        href:"#",
        icon:fileTypeReactjs
    },
    {
        label:"React Native",
        href:"#",
        icon:brandReactNative,
        color:"#61dafb"
    },
    {
        label:"Redux",
        href:"#",
        icon:reduxIcon
    },
    {
        label:"Nextjs",
        href:"#",
        icon:nextjsIcon
    },
]
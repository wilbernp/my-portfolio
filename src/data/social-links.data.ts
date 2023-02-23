import { ISocialLink } from "@/types/socialLink";
import githubIcon from '@iconify/icons-mdi/github';
import gmailIcon from '@iconify/icons-bxl/gmail';
import linkedinIcon from '@iconify/icons-mdi/linkedin';
import baselineWhatsapp from '@iconify/icons-ic/baseline-whatsapp';


export const contactLinksData:ISocialLink[] =[
    
    {
        href:"#",
        icon:linkedinIcon,
        alt:"Linkedin icon"
    },
    {
        href:"#",
        icon:baselineWhatsapp,
        alt:"WhatsApp icon"
    },
    {
        href:"#",
        icon:githubIcon,
        alt:"Github icon"
    },
]

export const bannerLinksData:ISocialLink[] = [
    {
        href:"#",
        icon:gmailIcon,
        alt:"G-Mail icon"
    },
    ...contactLinksData
]


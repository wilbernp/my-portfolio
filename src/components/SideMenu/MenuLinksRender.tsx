import { ILink } from '@/types/links';

interface MenuLinksRenderProps {
    links: ILink[]
}

export default function MenuLinksRender({ links }: MenuLinksRenderProps) {
    return (
        <ul className="flex flex-col h-full items-center justify-around">
            {
                links.map((link, index) => (
                    <li key={index}>
                        <a 
                        href={link.href}
                        className="text-blue-500 text-lg" 
                        >{link.label}</a>
                    </li>
                ))
            }
        </ul>
    );
}

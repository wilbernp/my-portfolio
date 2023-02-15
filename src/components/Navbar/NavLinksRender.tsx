import { ILink } from '@/types/links';

interface NavLinksRenderProps {
    links: ILink[]
}

function NavLinksRender({ links }: NavLinksRenderProps) {
    return (
        <ul className="hidden md:flex gap-5 ">
            {
                links.map((link, index) => (
                    <li key={index}>
                        <a 
                        href={link.href}
                        className="text-white text-lg" 
                        >{link.label}</a>
                    </li>
                ))
            }
        </ul>
    );
}

export default NavLinksRender;


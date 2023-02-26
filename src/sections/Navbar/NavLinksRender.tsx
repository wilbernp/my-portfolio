import { ILink } from '@/types/link';

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
                            className="text-neutral-200 hover:text-secondary text-lg transition-colors duration-300 ease-in-out"
                        >{link.label}</a>
                    </li>
                ))
            }
        </ul>
    );
}

export default NavLinksRender;


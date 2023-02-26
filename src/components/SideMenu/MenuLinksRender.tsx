import { ILink } from '@/types/link';

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
                            className="text-neutral-200 py-5 px-11 rounded-3xl border-2 border-secondary text-lg transition-colors duration-500 ease-in-out hover:bg-secondary hover:text-primary"
                        >{link.label}</a>
                    </li>
                ))
            }
        </ul>
    );
}

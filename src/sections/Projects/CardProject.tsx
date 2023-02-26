import { InlineIcon } from '@iconify/react'
import { IProject } from '@/types/project';
import githubIcon from '@iconify/icons-mdi/github';
import livePreview from '@iconify/icons-pajamas/live-preview';



export default function CardProject(props: IProject) {
    return (
        <div
            className='group/card overflow-hidden text-neutral-200 bg-primary w-80 py-7 text-center rounded-lg'
        >
            {/* titulo del proyecto */}
            <h2 className='text-2xl font-semibold'>{props.title}</h2>
            {/* container */}
            <div className='relative'>
                {/* imagen */}
                <div className='w-full h-60 bg-slate-500 transition-[background-color] duration-300 ease-in-out group-hover/card:bg-primary'></div>

                {/* description */}
                <p className='px-3 py-6 rounded-tr-2xl rounded-br-2xl text-start bg-main w-[90%] -translate-x-full absolute top-0 left-0 transition-transform ease-out duration-[900ms] group-hover/card:translate-x-0'>{props.description}</p>

                {/* tecnologias */}
                <p className='text-sm px-3 py-6 rounded-tl-2xl rounded-bl-2xl text-start bg-main w-[90%] translate-x-full absolute bottom-0 right-0 transition-transform ease-out duration-[900ms] group-hover/card:-translate-x-0'>{props.tecnoligies}</p>
            </div>

            {/* links */}
            <div className='flex justify-center items-center gap-3 mt-4'>
                {/* github link */}
                <a
                    href={props.github}
                    className="transition-[transform, colors] duration-200 ease-in-out hover:scale-125 hover:text-alert"
                >
                    <InlineIcon className='text-[2.1rem]' icon={githubIcon} />
                </a>

                {/* deploy link */}
                <a
                    href={props.deploy}
                    className="transition-[transform, colors] duration-200 ease-in-out hover:scale-125 hover:text-alert"
                >
                    <InlineIcon className='text-[1.9rem]' icon={livePreview} />
                </a>
            </div>

        </div>
    );
}

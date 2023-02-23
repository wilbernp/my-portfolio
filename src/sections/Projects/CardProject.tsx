import { InlineIcon } from '@iconify/react'
import { IProject } from '@/types/project';
import githubIcon from '@iconify/icons-mdi/github';
import livePreview from '@iconify/icons-pajamas/live-preview';



export default function CardProject(props: IProject) {
    return (
        <div
            className='text-white bg-slate-600 w-80 py-7 px-5 text-center'
        >
            {/* titulo del proyecto */}
            <h2 className='text-2xl font-semibold'>{props.title}</h2>
            {/* descripcion */}
            <p className='my-5'>{props.description}</p>
            {/* tecnologias */}
            <span className='text-sm'>{props.tecnoligies}</span>
            {/* links */}
            <div className='flex justify-center items-center gap-2 mt-4'>
                {/* github link */}
                <a href={props.github}>
                    <InlineIcon className='text-[2.1rem]' icon={githubIcon} />
                </a>

                {/* deploy link */}
                <a href={props.deploy}>
                    <InlineIcon className='text-[1.9rem]' icon={livePreview} />
                </a>
            </div>

        </div>
    );
}

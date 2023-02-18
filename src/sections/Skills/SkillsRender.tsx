import { ISkill } from '@/types/skill'

interface SkillsRenderProps {
    skills: ISkill[];
    className?:string;
}

// 35rem
export default function SkillsRender({ skills, className }: SkillsRenderProps) {
    console.log
    return (
        <div 
        className={`flex flex-wrap justify-center gap-5 mx-auto ${className}`}
        >
            {
                skills.map(skill => {
                    return (
                        <a
                            href=""
                            className='text-white bg-slate-600 px-3 py-4'
                        >{skill.label}</a>
                    )
                })
            }
        </div>
    )
}

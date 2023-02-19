import { softSkillsData } from '@/data/soft-skills.data'
import { technologiesData } from '@/data/technologies.data'
import SkillsRender from './SkillsRender'

export default function Skills() {
  return (
    <div className='mt-24'>
      {/* ilustracion */}
       <div className='w-[60%] h-[50vh] bg-slate-400 mx-auto mb-14'></div>
       {/* titulo */}
      <h2 className='text-center text-blue-500 text-3xl font-bold sm:text-4xl'>HABILIDADES</h2>
      {/* subtitulo 1 */}
       <h3 className='text-center text-white text-3xl font-medium my-6'>Tecnologias</h3> 
       {/* tecnologias */}
       <SkillsRender 
       skills={technologiesData}
       className="max-w-[35rem]"
       />
       {/* subtitulo 2 */}
       <h3 className='text-center text-white text-3xl font-medium mt-14 mb-6'>Habilidades Blandas</h3> 
       {/* habilidades blandas */}
       <SkillsRender 
       skills={softSkillsData}
       className="max-w-[33rem]"
       />
    </div>
  )
}

import { softSkillsData } from '@/data/soft-skills.data'
import { technologiesData } from '@/data/technologies.data'
import SkillsRender from './SkillsRender'

export default function Skills() {
  return (
    <div>
      <h2 className='text-center text-blue-500 text-4xl font-bold'>HABILIDADES</h2>
       <h3 className='text-center text-blue-500 text-3xl font-medium'>Tecnologias</h3> 
       <SkillsRender 
       skills={technologiesData}
       className="max-w-[35rem]"
       />

       <h3 className='text-center text-blue-500 text-3xl font-medium'>Habilidades Blandas</h3> 
       <SkillsRender 
       skills={softSkillsData}
       className="max-w-[33rem]"
       />
    </div>
  )
}

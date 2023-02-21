import Lottie from "lottie-react";
import coddinAnimation from "@/assets/lotties/codding-2.json"
import { softSkillsData } from '@/data/soft-skills.data'
import { technologiesData } from '@/data/technologies.data'
import SkillsRender from './SkillsRender'

export default function Skills() {
  return (
    <div className='mt-24'>
      {/* titulo */}
      <h2 className='text-center text-blue-500 text-3xl font-bold sm:text-4xl'>HABILIDADES</h2>
      {/* ilustracion */}
      <div className='w-[60%] max-w-lg mx-auto mb-14'>
        <Lottie
          animationData={coddinAnimation} loop={true}
        />
      </div>
      
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

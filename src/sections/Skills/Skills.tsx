import { frontendData } from '@/data/skills/fronted.data';
import { backendData } from '@/data/skills/backend.data';
import { softSkillsData } from "@/data/skills/soft-skills.data";
import { toolsData } from "@/data/skills/tools.data";
import CardSkill from "./CardSkill";
import ContainerSkill from "./ContainerSkill";

export default function Skills() {
  return (
    <div className="mt-9">
      {/* titulo */}
      <h2 className='text-center text-secondary text-3xl font-bold sm:text-4xl'>HABILIDADES</h2>

      {/* habilidades blandas */}
      <ContainerSkill
        title="Habilidades Blandas"
      >
        {
          softSkillsData.map(data => {
            return (
              <CardSkill
                {...data}
              />
            )
          })
        }

      </ContainerSkill>



      {/* frontend */}
      <ContainerSkill
        title="Frontend"
      >
        {
          frontendData.map(data => {
            return (
              <CardSkill
                {...data}
              />
            )
          })
        }
      </ContainerSkill>

      {/* backend */}
      <ContainerSkill
        title="Backend"
      >
        {
          backendData.map(data => {
            return (
              <CardSkill
                {...data}
              />
            )
          })
        }
      </ContainerSkill>


      {/* otras herramientas */}
      <ContainerSkill
        title="Herramientas"
      >
        {
          toolsData.map(data => {
            return (
              <CardSkill
                {...data}
              />
            )
          })
        }
      </ContainerSkill>
    </div>
  )
}

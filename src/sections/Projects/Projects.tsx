import { projectsData } from '@/data/projects.data'
import CardProject from './CardProject'

export default function Projects() {
  return (
    <div className='mt-32'>
      {/* titulo */}
      <h2 className='text-center text-blue-500 text-3xl font-bold mb-10 sm:text-4xl'>PROYECTOS</h2>
      {/* contenedor */}
      <div className='flex flex-wrap gap-4 justify-center'>
        {
          projectsData.map(project => (
            <CardProject
            {...project}
            />
          ))
        }
      </div>
    </div>
  )
}

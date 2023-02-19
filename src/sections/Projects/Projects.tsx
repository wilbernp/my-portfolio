import { projectsData } from '@/data/projects.data'

export default function Projects() {
  return (
    <div className='mt-32'>
      {/* titulo */}
      <h2 className='text-center text-blue-500 text-3xl font-bold mb-10 sm:text-4xl'>PROYECTOS</h2>
      {/* contenedor */}
      <div className='flex flex-wrap gap-4 justify-center'>
        {
          projectsData.map(project => (
            <div
              className='text-white bg-slate-600 w-80 py-7 px-5 text-center'
            >
              {/* titulo del proyecto */}
              <h2 className='text-2xl font-semibold'>{project.title}</h2>
              {/* descripcion */}
              <p className='my-5'>{project.description}</p>
              {/* tecnologias */}
              <span className='text-sm'>{project.tecnoligies}</span>
              {/* links */}
              <div className='flex justify-center gap-2 mt-4'>
                {/* link 1 */}
                <div className='w-7 h-7 bg-white rounded-full'></div>
                {/* link 2 */}
                <div className='w-7 h-7 bg-white rounded-full'></div>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

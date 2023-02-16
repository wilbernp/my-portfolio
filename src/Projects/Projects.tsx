import { projectsData } from '@/data/projects.data'
import React from 'react'

export default function Projects() {
  return (
    <div>
      <h2 className='text-center text-blue-500 text-4xl font-bold'>PROYECTOS</h2>
      <div className='flex flex-wrap gap-4 justify-center'>
        {
          projectsData.map(project => (
            <div
              className='text-white bg-slate-600 w-80 py-7 px-5 text-center'
            >
              <h2 className='text-2xl font-semibold'>{project.title}</h2>
              <p className='my-5'>{project.description}</p>
              <span className='text-sm'>{project.tecnoligies}</span>
              <div className='flex justify-center gap-2 mt-4'>
                <div className='w-7 h-7 bg-white rounded-full'></div>
                <div className='w-7 h-7 bg-white rounded-full'></div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

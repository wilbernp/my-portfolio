import Button from '@/components/Button/Button'
import SocialLink from '@/components/SocialLink/SocialLink'
import { bannerLinksData } from '@/data/social-links.data'

export default function Banner() {
  return (
    <section className='flex gap-3 flex-col  items-center h-100vh text-center mt-3 sm:mt-4 sm:text-start sm:flex-row  sm:gap-12 md:gap-16 lg:gap-32'>
      <div className='sm:w-[50%]'>
        {/* imagen del perfil */}
        <div className='flex justify-end'>
          <div className='w-40 h-40 bg-slate-300 rounded-full border-[6px] border-blue-400 sm:w-64 sm:h-64 lg:w-72 lg:h-72'></div>
        </div>
        {/* links sociales */}
        <div className='hidden sm:flex gap-5 mt-5 lg:ml-11'>
          {
            bannerLinksData.map((link, index) => {
              return (
                  <SocialLink 
                  key={index} 
                  href={link.href}
                  />
              )
            })
          }
        </div>
      </div>

      {/* article */}
      <article className='flex flex-col sm:w-[40%]'>
        {/* nombre */}
        <h1 className='text-white text-2xl font-bold sm:text-3xl md:text-4xl lg:mb-3'>WILBER NARVAEZ</h1>
        {/* perfil */}
        <h3 className='text-blue-500 text-xl lg:mb-5'>Lorem, ipsum.</h3>
        {/* parrafo */}
        <p className='text-white text-sm sm:text-base mb-4 sm:text-start lg:leading-6 lg:mb-8'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex illo fugit commodi distinctio, vero soluta nam quod pariatur minus ducimus nihil aliquid possimus iusto architecto vitae suscipit.
        </p>
        {/* botones */}
        <div className='flex flex-wrap gap-4 justify-center sm:justify-start lg:gap-10'>
          {/* boton contacto */}
          <div className='w-48 sm:w-40'>
            <Button title='Contacto' />
          </div>
          {/* boton descargar CV */}
          <div className='w-40 hidden sm:block'>
            <Button title='Descargar CV' secondary />
          </div>
        </div>
      </article>
    </section>
  )
}

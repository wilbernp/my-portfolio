
import { bannerLinksData } from '@/data/social-links.data'
import { InlineIcon } from '@iconify/react';
import imgProfile from "@/assets/perfil.png"
import { Button } from '@/components/Button';

export default function Banner() {
  return (
    <section className='flex gap-3 flex-col  items-center h-100vh text-center mt-3 sm:mt-4 sm:text-start sm:flex-row  sm:gap-12 md:gap-16 lg:gap-44'>
      <div className='sm:w-[50%]'>
        {/* contenedor de la imagen */}
        <div className='flex justify-end'>
          {/* imagen del perfil */}
          <img className='w-40 h-40 object-cover rounded-full border-[6px] border-secondary sm:border-none sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80' src={imgProfile} alt="" />
        </div>
        {/* links sociales */}
        <div className='hidden sm:flex gap-5 mt-5 lg:ml-11 lg:gap-7'>
          {
            bannerLinksData.map((link, index) => {
              return (
                <a href={link.href}>
                  <InlineIcon icon={link.icon} className='text-secondary text-[2.4rem] transition-transform duration-500 hover:scale-125 lg:text-[2.7rem]' />
                </a>
              )
            })
          }

        </div>
      </div>

      {/* article */}
      <article className='flex flex-col sm:w-[40%]'>
        {/* nombre */}
        <h1 className='text-neutral-200 text-2xl font-bold sm:text-3xl md:text-4xl lg:mb-3'>WILBER NARVAEZ</h1>
        {/* perfil */}
        <h3 className='text-secondary text-xl lg:mb-5'>Lorem, ipsum.</h3>
        {/* parrafo */}
        <p className='text-neutral-200 text-sm sm:text-base mb-4 sm:text-start lg:leading-6 lg:mb-8'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex illo fugit commodi distinctio, vero soluta nam quod pariatur minus ducimus nihil aliquid possimus iusto architecto vitae suscipit.
        </p>
        {/* botones */}
        <div className='flex flex-wrap gap-4 justify-center sm:justify-start lg:gap-10'>
          {/* boton contacto */}
          <div className='w-48 sm:w-40'>
            <Button
              color='alert'
              title='Contacto'
            />
          </div>
          {/* boton descargar CV */}
          <div className='w-40 hidden sm:block'>
            <Button
              title='Descargar CV'
              color='alert'
              secondary
            />
          </div>
        </div>
      </article>
    </section>
  )
}

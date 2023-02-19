
export default function About() {
    return (
        <section>
            {/* separador */}
            <div className="flex gap-4 mb-14 sm:mt-6">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 sm:w-2 sm:h-2" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 sm:w-2 sm:h-2" />
                <div className="w-full h-1 rounded-full bg-blue-500 sm:h-1.5" />
            </div>
            {/* contenedor */}
            <div className="flex flex-col gap-36 lg:flex-row-reverse">
                {/* ilustracion */}
                <div className='w-[60%] h-[50vh] bg-slate-400 mx-auto'></div>
                {/* articulo */}
                <article className="text-sm sm:text-base">
                    {/* titulo */}
                    <h2 className='text-center text-blue-500 text-3xl font-bold sm:text-4xl'>QUIEN SOY</h2>
                    {/* parrafo 1 */}
                    <p className='text-white my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sit cupiditate aperiam quibusdam necessitatibus.</p>
                    {/* parrafo 2 */}
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt incidunt ut alias rerum ipsa fugiat ratione, nobis eius temporibus distinctio perspiciatis officia, sed fuga quae in placeat nemo corrupti consectetur.</p>
                </article>
            </div>
        </section>
    )
}

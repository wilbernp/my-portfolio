import Lottie from "lottie-react";
import coddinAnimation from "@/assets/lotties/codding-1.json"
export default function About() {
    return (
        <section>
            {/* separador */}
            <div className="flex gap-4 mb-14 sm:mt-6">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary sm:w-2 sm:h-2" />
                <div className="w-1.5 h-1.5 rounded-full bg-secondary sm:w-2 sm:h-2" />
                <div className="w-full h-1 rounded-full bg-secondary sm:h-1.5" />
            </div>
            {/* contenedor */}
            <div className="flex flex-col gap-36 lg:flex-row-reverse">
                {/* ilustracion */}
                <div className='w-[80%] max-w-md mx-auto'>
                    <Lottie
                        animationData={coddinAnimation} loop={true}
                    />
                </div>
                {/* articulo */}
                <article className="text-sm sm:text-base">
                    {/* titulo */}
                    <h2 className='text-center text-secondary text-3xl font-bold sm:text-4xl'>QUIEN SOY</h2>
                    {/* parrafo 1 */}
                    <p className='text-neutral-200 my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sit cupiditate aperiam quibusdam necessitatibus.</p>
                    {/* parrafo 2 */}
                    <p className='text-neutral-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt incidunt ut alias rerum ipsa fugiat ratione, nobis eius temporibus distinctio perspiciatis officia, sed fuga quae in placeat nemo corrupti consectetur.</p>
                </article>
            </div>
        </section>
    )
}

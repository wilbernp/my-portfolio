
import Button from "@/components/Button/Button";
import { Input } from "@/components/Input";
import SocialLink from "@/components/SocialLink/SocialLink";
import { TextArea } from "@/components/TextArea";
import { contactLinksData } from "@/data/social-links.data";

export default function Contact() {
    return (
        <div className="mt-24">
            {/* titulo */}
            <h2 className='text-center text-blue-500 text-3xl font-bold mb-6 sm:text-4xl' >Contacto</h2>
            {/* container */}
            <div className="flex flex-col items-center gap-x-9 relative lg:flex-row lg:items-start lg:justify-between">
                {/* formulario */}
                <form className="w-[70%] max-w-md lg:w-[40%]">

                    {/* nombre */}
                    <Input
                        placeholder="Nombre"
                        type="text"
                    />
                    {/* email */}
                    <Input
                        placeholder="E-mail"
                        type="email"
                    />
                    {/* mensaje */}
                    <TextArea
                        rows={5}
                        placeholder="Mensaje"
                    />
                    <div className="flex lg:justify-end">
                        <div className="w-40">
                            <Button title="Enviar" />
                        </div>
                    </div>
                </form>
                {/* links sociales icono + etiqueta */}
                <div className="w-[70%] max-w-md lg:w-60 flex flex-col gap-8 lg:gap-14 mt-14">
                    <div className="flex flex-col gap-8">
                        <SocialLink href="#" label="Lorem, ipsum dolor." />
                        <SocialLink href="#" label="Lorem, ipsum dolor." />
                    </div>
                    {/* links sociales icono */}
                    <div className="flex gap-8">
                        {
                            contactLinksData.map((link, index) => {
                                return (
                                    <div className='w-11 h-11 '>

                                        <SocialLink
                                            key={index}
                                            href={link.href}
                                        />
                                    </div>
                                )
                            })
                        }

                    </div >
                </div>
                {/* contenedor ilustracion */}
                <div className="hidden w-[20%] h-[50vh] lg:block">
                    {/* ilustracion */}
                    <div className='bg-slate-400 absolute bottom-0 right-0 w-[20%] h-1/2'></div>
                </div>
            </div>
        </div>
    )
}

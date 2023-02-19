
import { Input } from "@/components/Input";
import SocialLink from "@/components/SocialLink/SocialLink";
import { TextArea } from "@/components/TextArea";
import { contactLinksData } from "@/data/social-links.data";

export default function Contact() {
    return (
        <div className="flex flex-col items-center mt-24 ">
            {/* titulo */}
            <h2 className='text-center text-blue-500 text-3xl font-bold mb-6 sm:text-4xl' >Contacto</h2>
            {/* formulario */}
            <form className="w-[70%]">
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

            </form>
            {/* links sociales icono + etiqueta */}
            <div className="w-80">
                <div>
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
           
        </div>
    )
}

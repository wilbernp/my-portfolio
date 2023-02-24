import Button from "@/components/Button/Button";
import { Input } from "@/components/Input";
import SocialLink from "@/components/SocialLink/SocialLink";
import { TextArea } from "@/components/TextArea";
import { contactLinksData } from "@/data/social-links.data";
import gmailIcon from '@iconify/icons-bxl/gmail';
import phoneInTalk from '@iconify/icons-material-symbols/phone-in-talk';
import { InlineIcon } from "@iconify/react";

export default function Contact() {
    return (
        <div className="mt-24 lg:bg-contact-image bg-no-repeat bg-right-bottom bg-[length:250px_500px]">
            {/* titulo */}
            <h2 className='text-center text-blue-500 text-3xl font-bold mb-14 sm:text-4xl' >CONTACTO</h2>
            {/* container */}
            <div className="flex flex-col items-center gap-x-32 relative lg:flex-row lg:items-start ">
                {/* formulario */}
                <form className="w-full md:w-[70%] max-w-md lg:w-[40%]">

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
               {/* links sociales */}
                <div className="w-full md:w-[70%] max-w-md lg:w-60 flex flex-col gap-8 lg:gap-14">
                     {/* links sociales icono + etiqueta */}
                    <div className="flex flex-col gap-8">
                        {/* gmail link */}
                        <a className='flex items-center gap-6 w-max' href="#">
                            <div className="bg-blue-400 flex items-center rounded-full w-11 h-11">
                            <InlineIcon icon={gmailIcon} className='text-slate-800 m-auto text-2xl left-2' />
                            </div>
                            <span className="text-white">Lorem, ipsum dolor.</span>
                        </a>

                        {/* phone link */}
                        <a className='flex items-center gap-6 w-max' href="#">
                            <div className="bg-blue-400 flex items-center rounded-full w-11 h-11">
                            <InlineIcon icon={phoneInTalk} className='text-slate-800 m-auto text-2xl left-2' />
                            </div>
                            <span className="text-white">Lorem, ipsum dolor.</span>
                        </a>
                    </div>

                    {/* links sociales icono */}
                    <div className="flex gap-8">
                        {
                            contactLinksData.map((link, index) => {
                                return (
                                    <a href={link.href} key={index}>
                                        <InlineIcon icon={link.icon} className='text-blue-400 text-[2.8rem] transition-transform duration-500 hover:scale-125' />
                                    </a>
                                )
                            })
                        }
                    </div >
                </div>
                
            </div>
        </div>
    )
}

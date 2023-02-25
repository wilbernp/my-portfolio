
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import SocialLink from "@/components/SocialLink/SocialLink";
import { TextArea } from "@/components/TextArea";
import { contactLinksData } from "@/data/social-links.data";
import gmailIcon from '@iconify/icons-bxl/gmail';
import phoneInTalk from '@iconify/icons-material-symbols/phone-in-talk';
import { InlineIcon } from "@iconify/react";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <div className="mt-24 lg:bg-contact-image bg-no-repeat bg-right-bottom bg-[length:250px_500px]">
            {/* titulo */}
            <h2 className='text-center text-blue-500 text-3xl font-bold mb-14 sm:text-4xl' >CONTACTO</h2>
            {/* container */}
            <div className="flex flex-col items-center gap-x-20 xl:gap-36 gap-y-10 relative lg:flex-row lg:items-start ">
                {/* formulario */}
                <ContactForm />
               {/* links sociales */}
                <div className="w-full md:w-[70%] max-w-md lg:w-60 flex flex-col gap-8 lg:gap-10">
                     {/* links sociales icono + etiqueta */}
                    <div className="flex flex-col gap-8">
                        {/* gmail link */}
                        <a className='flex items-center gap-6 w-max' href="#">
                            <div className="bg-blue-400 flex items-center rounded-full w-10 h-10">
                            <InlineIcon icon={gmailIcon} className='text-slate-800 m-auto text-2xl left-2' />
                            </div>
                            <span className="text-[#d5e1f1]">Lorem, ipsum dolor.</span>
                        </a>

                        {/* phone link */}
                        <a className='flex items-center gap-6 w-max' href="#">
                            <div className="bg-blue-400 flex items-center rounded-full w-10 h-10">
                            <InlineIcon icon={phoneInTalk} className='text-slate-800 m-auto text-2xl left-2' />
                            </div>
                            <span className="text-[#d5e1f1]">Lorem, ipsum dolor.</span>
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

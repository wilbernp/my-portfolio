import Button from "@/components/Button/Button";
import { Input } from "@/components/Input";
import SocialLink from "@/components/SocialLink/SocialLink";
import { TextArea } from "@/components/TextArea";
import { contactLinksData } from "@/data/social-links.data";

export default function Contact() {
    return (
        <div className="flex flex-wrap justify-center">
            <form className="w-[70%]">
                <h2>Contacto</h2>
                <Input
                    id='name'
                    placeholder='Nombre'
                    type="text"
                />
                <Input
                    id='email'
                    type="email"
                    placeholder='E-mail'
                />
                <TextArea
                    id='message'
                    placeholder='Mensaje'
                    rows={5}
                />
                <div className="flex justify-end">
                    <Button secondary title="Enviar" />
                </div>

            </form>
            <div className="w-80">
                <div>
                    <SocialLink href="#" label="Lorem, ipsum dolor." />
                    <SocialLink href="#" label="Lorem, ipsum dolor." />
                </div>
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

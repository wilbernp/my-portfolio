import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";

export default function Contact() {
    return (
        <div>
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
        </div>
    )
}

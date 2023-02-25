import { useState } from 'react'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { TextArea } from '@/components/TextArea'
import { ChangeEventType, IStateInputs } from './types';

const initialInputs: IStateInputs = {
    name: "",
    email: "",
    message: "",
}

// Formulario de contacto
export default function ContactForm() {
    const [inputs, setInputs] = useState<IStateInputs>(initialInputs)

    function handleChange(e: ChangeEventType) {
        setInputs(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const { name, email, message } = inputs
        if (!name.length || !email.length || !message.length) {
            return alert("Todos los campos son requeridos")
        }
        try {
            const templateParams = {
                name,
                email,
                message
            }
            const result = await emailjs.send(
                `${import.meta.env.VITE_SERVICE_ID}`,
                `${import.meta.env.VITE_TEMPLATE_ID}`,
                templateParams,
                `${import.meta.env.VITE_PUBLIC_KEY}`,
            )
            alert(result.text)
        } catch (error) {
            const errorType = error as EmailJSResponseStatus
            alert(errorType.text)
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full md:w-[70%] max-w-md lg:w-[40%]">
            {/* nombre */}
            <Input
                type="text"
                placeholder="Nombre"
                name='name'
                value={inputs.name}
                onChange={handleChange}
            />
            {/* email */}
            <Input
                type="email"
                placeholder="E-mail"
                name='email'
                value={inputs.email}
                onChange={handleChange}
            />
            {/* mensaje */}
            <TextArea
                placeholder="Mensaje"
                rows={5}
                name='message'
                value={inputs.message}
                onChange={handleChange}
            />
            <div className="flex lg:justify-end">
                <div className="w-40">
                    <Button type='submit' title="Enviar" />
                </div>
            </div>
        </form>
    )
}

import { useState } from 'react'
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { TextArea } from '@/components/TextArea'
import { ChangeEventType, IStateInputs } from './types';

const initialInputs: IStateInputs = {
    fieldName: "",
    fieldMail: "",
    fieldMessage: "",
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
        const { fieldName, fieldMail, fieldMessage } = inputs
        if (!fieldName.length || !fieldMail.length || !fieldMessage.length) {
            return alert("Todos los campos son requeridos")
        }
        try {
            const templateParams = {
                name: fieldName,
                email: fieldMail,
                message: fieldMessage
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
                name='fieldName'
                value={inputs.fieldName}
                onChange={handleChange}
            />
            {/* email */}
            <Input
                type="email"
                placeholder="E-mail"
                name='fieldMail'
                value={inputs.fieldMail}
                onChange={handleChange}
            />
            {/* mensaje */}
            <TextArea
                placeholder="Mensaje"
                rows={5}
                name='fieldMessage'
                value={inputs.fieldMessage}
                onChange={handleChange}
            />
            <div className="flex lg:justify-end">
                <div className="w-40">
                    <Button
                        type='submit'
                        title="Enviar"
                        className='border-secondary text-secondary'
                    />
                </div>
            </div>
        </form>
    )
}

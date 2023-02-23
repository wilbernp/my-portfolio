import React from 'react';

interface Props {
    children?: React.ReactNode;
    title: string;
}

function ContainerSkill({ children, title }: Props) {
    return (
        <div className="flex flex-wrap justify-center my-10">
            <div className="bg-slate-500 py-3 px-5">
                {/* titulo de la tarjeta */}
                <h2 className="text-center text-white text-xl font-medium mb-4">{title}</h2>
                {/* contenedor tarjeta de habilidad */}
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ContainerSkill;


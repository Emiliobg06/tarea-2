import Link from 'next/link';
import React from 'react';

const Encabezado = () => {
    return (
        <div className="w-full flex items-start p-4">
            <img 
                src="/im2.jpeg"
                alt="Logo"
                className="w-16 h-16 mr-4"
            />
            <nav className="flex gap-4">
                <Link href="/login" className="text-blue-500 hover:underline">
                    Home
                </Link>
                <Link href="/contador" className="text-blue-500 hover:underline">
                    Page 1
                </Link>
                <Link href="/cuadros" className="text-blue-500 hover:underline">
                    Page 2
                </Link>
            </nav>
        </div>
    );
};

export default Encabezado;
"use client";
import React, { useState } from "react";
import Encabezado from '../componentes/encabezado';

export default function Zero() {

    const [fontSize, setFontSize] =useState(10)
    const handleButton = (e: React.FormEvent) => {
        e.preventDefault();
        setFontSize(fontSize + 1)
    }

    return (
        <div className="min-h-screen flex flex-col items-top justify-top gap-4">
            <Encabezado />
            <div className="flex flex-col items-center justify-center gap-4">
                <h1>{fontSize}</h1>
                <form onSubmit={handleButton}>
                    <button type="submit"> Aumenta </button>
                </form>
            </div>
        </div>
    );
}
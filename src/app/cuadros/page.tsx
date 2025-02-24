"use client";
import React, { useState } from 'react';
import Encabezado from '../componentes/encabezado';

const c1 = "grey";
const c2 = "red";
const c3 = "green";
const c4 = "yellow";
const c5 = "blue";

const Rectangle = ({ color }) => {
    return (
        <div style={{ width: '150px', height: '150px', backgroundColor: color }}></div>
    );
};

export default function Page2() {
    const [selectedColor, setSelectedColor] = useState(c1);

    const handleColorChange = (color, e) => {
        e.preventDefault();
        setSelectedColor(color);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-start gap-4">
            <Encabezado />
            <div className="flex flex-col items-center justify-center gap-4">
                <Rectangle color={selectedColor} />
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        <form onSubmit={(e) => handleColorChange(c2, e)}>
                            <button type="submit">
                                <Rectangle color={c2} />
                            </button>
                        </form>
                        <form onSubmit={(e) => handleColorChange(c3, e)}>
                            <button type="submit">
                                <Rectangle color={c3} />
                            </button>
                        </form>
                    </div>
                    <div className="flex gap-4">
                        <form onSubmit={(e) => handleColorChange(c4, e)}>
                            <button type="submit">
                                <Rectangle color={c4} />
                            </button>
                        </form>
                        <form onSubmit={(e) => handleColorChange(c5, e)}>
                            <button type="submit">
                                <Rectangle color={c5} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
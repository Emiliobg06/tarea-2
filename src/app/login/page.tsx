import React from "react";
import Encabezado from '../componentes/encabezado';
import Login from '../componentes/login';

export default function login() {

    return (
        <div className="min-h-screen flex flex-col items-top justify-top gap-4">
            <Encabezado />
            <div className="flex flex-col items-center justify-center gap-4">
                <Login />
            </div>
        </div>
    );
}
import '../estilos/App.css'
import React from 'react';
import '../estilos/Footer.css';
import { BrowserRouter, useNavigate } from "react-router-dom";


export const Historial = () => {
    const local = JSON.parse(localStorage.getItem("datos"))
 
    const link2 = useNavigate();
    return (
        <>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Fecha de cotización</th>
                            <th scope="col">Propiedad</th>
                            <th scope="col">Ubicación</th>
                            <th scope="col">Metros cuadrados</th>
                            <th scope="col">Poliza mensual</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        
                    </tbody>
                </table>
            </div>
            <button onClick={() => link2("/")} className="historial-link">Volver</button>

        </>

    );
}

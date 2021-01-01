import React from 'react'
import { AcercaDe } from './components/presentacion/AcercaDe'
import { Presentacion } from './components/presentacion/Presentacion'
import { Tecnologias } from './components/presentacion/Tecnologias'
import { ProyectoList } from './components/proyectos/ProyectoList'

export const PortafolioApp = () => {
    return (
    <div>
        <Presentacion />
        <AcercaDe />
        <Tecnologias />
        <ProyectoList />
    </div>
    )
}


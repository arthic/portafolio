import React from 'react'
import styled from '@emotion/styled'

const Contenido = styled.div`
	h1, p {
		padding-top: 0.5rem;
	}
	p {
		text-align: justify;
	}
	span {
		color: rgb(17, 236, 229);
	}
`

export const AcercaDe = () => {
	return (
		<div className="contenedor animate__animated animate__fadeIn animate__delay-2s">
			<Contenido className="tarjeta-contenido">
				<h1>Acerca de mi</h1>
				<p>
				Estudiante de la <span>Lic. en Informática</span>, en la <span>Facultad de Contaduría y Administración</span> de la <span>UNAM</span>, apasionado del desarrollo web y de las tecnologías modernas para su construcción.
				<br/><br/>Soy un Frontend con inclinaciones a convertirse en Full Stack Developer, me encuentro en búsqueda de una oportunidad laboral como desarrollador para continuar consolidando mis conocimientos recién adquiridos en dichas tecnologías, aportar valor a la organización y desarrollar mi carrera profesional.
				</p>
			</Contenido>
		</div>
	)
}

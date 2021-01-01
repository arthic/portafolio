import React from 'react'
import { ProyectoCard } from './ProyectoCard'
import { proyectos } from '../../data/proyectos'
import styled from '@emotion/styled'

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 1rem;
	margin-bottom: 3rem;

	@media (max-width: 1000px) {
		grid-template-columns: 1fr;
	}

	img {
		max-width: 400px;
	}
`
export const ProyectoList = () => {

	return (
		<div className="contenedor animate__animated animate__fadeIn animate__delay-2s">
			<h1 style={{
				textAlign: 'center',
				color: 'rgb(17, 236, 229)',
				fontWeight: '200',
				fontSize: '2.5rem',
				padding: '2rem 0 1rem'
			}}>Proyectos</h1>
			<Grid>
			{
				proyectos.map(proyecto => (
					<ProyectoCard
						key={proyecto.id}
						{...proyecto}
					/>
				))
			}
			</Grid>
		</div>
	)
}

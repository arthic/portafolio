import React from 'react'
import styled from '@emotion/styled'

const Tarjeta = styled.div`
	text-align: center;
	p {
		text-align: justify;
	}
	.img-proyecto {
		max-width: 530px;
		width: 100%;
	}
`
const Tecnologias = styled.div`
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}

	img {
		margin-top: 1rem;
		width: 70px;
		background: transparent;
		border-radius: 15px;
		padding: 0.3rem;
		margin-right: 1rem;
	}
`
const Enlaces = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 1.5rem;

	@media (max-width: 500px) {
		flex-direction: column;
	}
`
const GitHub = styled.div`
	a {
		background: rgb(29, 38, 54);
		color:  rgb(17, 236, 229);
		width: 100%;
		margin-top: 0.5rem;
		margin-right: 1rem;
		padding: 0.5rem;
		text-decoration: none;
		border-radius: 15px;
		font-size: 1.2rem;
		border: none;
		transition: ease .3s;
	}
	a:last-of-type {
		margin-right: 0;
	}
	a:hover {
		background: rgb(17, 236, 229);;
		color: rgb(29, 38, 54);
	}
	a i {
		margin: 0 0.3rem 0 0.4rem;
	}
	@media (max-width: 500px) {
		.github-front {
			margin: 0 0.3rem;
		}
	}
`
const Sitio = styled.div`

	@media (max-width: 500px) {
		margin-top: 2rem;
	}
	a{
		background: rgb(17, 236, 229);
		color:  rgb(29, 38, 54);
		max-width: 150px;
		width: 100%;
		margin-top: 0.5rem;
		padding: 0.5rem;
		border-radius: 15px;
		font-size: 1.2rem;
		border: none;
		text-decoration: none;
		transition: ease .3s;
	}
	a:hover {
		background: rgb(29, 38, 54);
		color: rgb(17, 236, 229);
		border: solid 2px rgb(17, 236, 229);
	}
	a i {
		margin: 0 0.3rem 0 0.4rem;
	}
`
export const ProyectoCard = ({
    nombre,
    imagen,
    descripcion,
	tecnologias,
	testing,
	sitio,
	github
}) => {
	return (
		<Tarjeta className="tarjeta-contenido">
			<h1>{nombre}</h1>
			<img src={imagen} alt="Arthic Proyecto" className="img-proyecto"/>
			<p>{descripcion}</p>
			<div style={{
				display: 'grid'
			}}>
			<Tecnologias>
				<div>
					{
						tecnologias.map(tecnologia => (
							// <p>{tecnologia}</p>
							<img src={tecnologia} alt="tecnologia"/>
						))
					}
					{testing &&
						testing.map(test => (
							// <p>{tecnologia}</p>
							<img src={test} alt="tecnologia"/>
						))
					}
				</div>
			</Tecnologias>
			<Enlaces>
				<GitHub>
					{
						github[1] ?
						<div>
							<a href={github[0]} target="_blank" rel="noreferrer">
								Frontend
								<i className="fab fa-github"></i>
							</a>
							<a href={github[1]} target="_blank" rel="noreferrer">
								Backend
								<i className="fab fa-github"></i>
							</a>
						</div>
						:
						<a href={github[0]} target="_blank" rel="noreferrer" className="github-front">
							Ver código
							<i className="fab fa-github"></i>
						</a>
					}
				</GitHub>

				<Sitio>
					<a href={sitio} target="_blank" rel="noreferrer">
						Visitar
						<i className="fas fa-globe"></i>
					</a>
				</Sitio>
			</Enlaces>
			</div>
		</Tarjeta>
	)
}

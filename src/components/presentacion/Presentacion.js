import React from 'react'
import styled from '@emotion/styled'


const Contenedor = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;

	@media (max-width: 1000px) {
		grid-template-columns: 1fr;
	}
`
const HeaderAaron = styled.div`
	display: flex;
	flex-direction: column;
    justify-content: center;
	color: rgb(17, 236, 229);
	margin: 0 auto;
	text-align: center;
	font-size: 2rem;

	img {
		box-shadow: 0px 0px 20px #fff;
		border-radius: 15px;
		max-width: 300px;
		width: 100%;
		height: 300px;
		margin: 4rem 0 1.2rem 0;
		background: rgb(29, 38, 54);
		padding: 1.2rem;
	}
	@media (max-width: 1000px) {
		img {
			margin: 4rem auto 2rem auto;
		}
	}
	a i {
		padding: 10px;
		margin: 0 0.5rem;
		color: rgb(17, 236, 229);
		border-radius: 15px;
		transition: ease .3s;
	}
	a i:hover {
		background: rgb(53 70 101);
	}
	div {
		max-width: 300px;
		margin: 0 auto;
	}
	button {
		background: rgb(29, 38, 54);
		color:  rgb(17, 236, 229);
		width: 100%;
		margin-top: 0.5rem;
		padding: 0.3rem;
		border-radius: 15px;
		font-size: 1.5rem;
		border: none;
		transition: ease .3s;
	}
	button:hover {
		background: rgb(17, 236, 229);;
		color: rgb(29, 38, 54);
	}
`
const TarjetaPresentacion = styled.div`
	font-size: 1.2rem;
	background: rgb(29, 38, 54);
	border-radius: 15px;
	text-align: center;
	margin-top: 3.5rem;
	color: rgb(221, 235, 255);
	font-weight: 400;

	h1 {
		font-weight: 400;
	}

	h1, h3 {
		margin-top: 1rem;
	}

	h3 {
		font-weight: 200;
	}

	img {
		margin-top: 1rem;
		width: 70px;
		background: transparent;
		border-radius: 15px;
		padding: 0.3rem;
		margin-right: 1rem;
		transition: ease .3s;
	}

	img:hover {
		background: rgb(53 70 101);
	}
`
export const Presentacion = () => {
	return (
		<div>
			<Contenedor className="contenedor">
				<HeaderAaron>
						<img
							src="https://res.cloudinary.com/dyiw5vcuq/image/upload/v1609286999/portafolio/aaron_s1zcks.jpg"
							alt="Aarón Llanos Soto"
							className="animate__animated animate__flash animate__slow"
						/>
						<div>
							<a href="https://github.com/arthic" target="_blank" rel="noreferrer">
								<i className="fab fa-github"></i>
							</a>
							<a href="https://www.linkedin.com/in/aaron-llanos-soto-60b7137a/" target="_blank" rel="noreferrer">
								<i className="fab fa-linkedin"></i>
							</a>
							<a href="mailto:aaron.lls.dev@gmail.com" target="_blank" rel="noreferrer">
								<i className="fas fa-envelope"></i>
							</a>
							<a href="https://wa.me/5215525151137?text=%C2%A1Hola%21%20Visite%20tu%20portafolio%20web." target="_blank" rel="noreferrer">
								<i className="fab fa-whatsapp"></i>
							</a>
						</div>
						{/* <a href="https://drive.google.com/file/d/1nkG29bkgzdsDfycw41Mynr-j5LFHzZj-/view?usp=sharing" target="_blank" rel="noreferrer"> */}
						<a href="/portafolio/assets/cv.pdf" target="_blank" rel="noreferrer">
							<button>
								Descargar CV
							</button>
						</a>
				</HeaderAaron>
				<TarjetaPresentacion className="animate__animated animate__fadeIn animate__delay-2s">
					<h1>Aarón Llanos Soto</h1>
					<h3 style={{
						color: 'rgb(17, 236, 229)'
					}}>Full Stack Developer:</h3>
					<div style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flexWrap: 'wrap',
					}}>
						{/* React */}
						<a href="https://es.reactjs.org/" target="_blank" rel="noreferrer">
							<img
								src="https://res.cloudinary.com/dyiw5vcuq/image/upload/v1608788938/portafolio/react_v9x7rr.png"
								alt="React"
							/>
						</a>
						{/* Node.js */}
						<a href="https://nodejs.org/es/" target="_blank" rel="noreferrer">
							<img
								src="https://res.cloudinary.com/dyiw5vcuq/image/upload/v1608789226/portafolio/node_i07vb3.png"
								alt="Node.js"
							/>
						</a>
						{/* MongoDB */}
						<a href="https://www.mongodb.com/es" target="_blank" rel="noreferrer">
							<img
								src="https://res.cloudinary.com/dyiw5vcuq/image/upload/v1608789330/portafolio/mongodb_aolgw4.png"
								alt="MongoDB"
							/>
						</a>
						{/* Javascript */}
						<a href="https://www.javascript.com/" target="_blank" rel="noreferrer">
							<img
								src="https://res.cloudinary.com/dyiw5vcuq/image/upload/v1608789478/portafolio/js_svpkw9.png"
								alt="Javascript"
							/>
						</a>
						{/* css3 */}
						<a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank" rel="noreferrer">
							<img
								src="https://res.cloudinary.com/dyiw5vcuq/image/upload/v1608789656/portafolio/css3_gwfk7m.png"
								alt="css3"
							/>
						</a>
						{/* Jest */}
						<a href="https://jestjs.io/" target="_blank" rel="noreferrer">
							<img
								src="https://res.cloudinary.com/dyiw5vcuq/image/upload/v1608792023/portafolio/jest_z5ic5s.png"
								alt="Jest"
							/>
						</a>
						{/* GraphQL */}
						<a href="https://graphql.org/" target="_blank" rel="noreferrer">
							<img
								src="https://res.cloudinary.com/dyiw5vcuq/image/upload/v1608792173/portafolio/GraphQL_sjsi2t.png"
								alt="GraphQL"
							/>
						</a>
						{/* Next.js */}
						<a href="https://nextjs.org/" target="_blank" rel="noreferrer">
							<img
								src="https://res.cloudinary.com/dyiw5vcuq/image/upload/v1608792485/portafolio/nextjs_m7h4gc.png"
								alt="Next.js"
							/>
						</a>
						{/* Gatsby */}
						<a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
							<img
								src="https://res.cloudinary.com/dyiw5vcuq/image/upload/v1608792614/portafolio/gatsby_u1vrwx.png"
								alt="Gatsby"
								style={{
									marginRight: '0'
								}}
							/>
						</a>
					</div>
					<h3 style={{
						color: 'rgb(17, 236, 229)'
					}}>Estudiante Lic. en Informática</h3>
					{/* UNAM */}
					<a href="https://www.unam.mx/" target="_blank" rel="noreferrer">
						<img
							src="https://res.cloudinary.com/dyiw5vcuq/image/upload/v1608791872/portafolio/unam-escudo_ulxaka.png"
							alt="UNAM"
							style={{
								width: '130px',
								marginBottom: '0.5rem',
							}}
						/>
					</a>
					{/* FCA */}
					<a href="http://www.fca.unam.mx/" target="_blank" rel="noreferrer">
						<img
							src="https://res.cloudinary.com/dyiw5vcuq/image/upload/v1608794387/portafolio/fca_kjdn6a.png"
							alt="Facultad de Contaduría y Administración"
							style={{
								width: '130px',
								marginBottom: '0.5rem',
							}}
						/>
					</a>
				</TarjetaPresentacion>
			</Contenedor>
		</div>
	)
}

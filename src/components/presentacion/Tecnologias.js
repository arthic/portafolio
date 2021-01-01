import React from 'react'
import styled from '@emotion/styled'

const Skills = styled.div`

	@media (max-width: 500px) {
		display: inline-block;
	}
`
const Contenedor = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;

	@media (max-width: 1000px) {
		grid-template-columns: 1fr;
	}
`
export const Tecnologias = () => {
	return (
		<div className="contenedor animate__animated animate__fadeIn animate__delay-2s">
			<Contenedor className="tarjeta-contenido">
				<div>
					<h1>Skills</h1>
					<Skills
						className="lista_tecnologias skills"
					>
						<ul>
							<li>
								<h5>HTML5</h5>
								<div>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
								</div>
							</li>
							<li>
								<h5>CSS 3<br/>Flexbox & Grid</h5>
								<div>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
								</div>
							</li>
							<li>
								<h5>Git y GitHub</h5>
								<div>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star-half"></i>
								</div>
							</li>
							<li>
								<h5>Javascript</h5>
								<div>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
								</div>
							</li>
							<li>
								<h5>React</h5>
								<div>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
								</div>
							</li>
							<li>
								<h5>Node.js</h5>
								<div>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
								</div>
							</li>
						</ul>
						<ul>
							<li>
								<h5>MongoDB</h5>
								<div>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
								</div>
							</li>
							<li>
								<h5>GraphQL</h5>
								<div>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
								</div>
							</li>
							<li>
								<h5>Next.js</h5>
								<div>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
								</div>
							</li>
							<li>
								<h5>Gatsby</h5>
								<div>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
								</div>
							</li>
							<li>
								<h5>Jest</h5>
								<div>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
									<i className="fas fa-star"></i>
								</div>
							</li>
						</ul>
					</Skills>
				</div>
				<div>
					<h1>Herramientas</h1>
					<div
						className="lista_tecnologias"
						style={{
							gridTemplateColumns: 'repeat(2, 80px)',
						}}
					>
						<ul>
							<li>
								<h5>VS Code </h5>
								<div>
									<i className="fas fa-check-circle"></i>
								</div>
							</li>
							<li>
								<h5>npm</h5>
								<div>
									<i className="fas fa-check-circle"></i>
								</div>
							</li>
							<li>
								<h5>Postman</h5>
								<div>
									<i className="fas fa-check-circle"></i>
								</div>
							</li>
							<li>
								<h5>MongoDB<br/>Compass</h5>
								<div>
									<i className="fas fa-check-circle"></i>
								</div>
							</li>
							<li>
								<h5>Mongo<br/>Atlas</h5>
								<div>
									<i className="fas fa-check-circle"></i>
								</div>
							</li>
							<li>
								<h5>Vercel</h5>
								<div>
									<i className="fas fa-check-circle"></i>
								</div>
							</li>
						</ul>
						<ul>
							<li>
								<h5>Netlify</h5>
								<div>
									<i className="fas fa-check-circle"></i>
								</div>
							</li>
							<li>
								<h5>Heroku</h5>
								<div>
									<i className="fas fa-check-circle"></i>
								</div>
							</li>
							<li>
								<h5>Firebase</h5>
								<div>
									<i className="fas fa-check-circle"></i>
								</div>
							</li>
							<li>
								<h5>cPanel</h5>
								<div>
									<i className="fas fa-check-circle"></i>
								</div>
							</li>
							<li>
								<h5>Webmail</h5>
								<div>
									<i className="fas fa-check-circle"></i>
								</div>
							</li>
							<li>
								<h5>FTP</h5>
								<div>
									<i className="fas fa-check-circle"></i>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</Contenedor>
		</div>
	)
}

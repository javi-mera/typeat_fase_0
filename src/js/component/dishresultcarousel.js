import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/dishresult.scss";
import { Link, useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export const Dishresultcarousel = users => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	return (
		<Carousel className="prueba0" id="pruebafondo">
			<Carousel.Item className="prueba">
				<Container>
					<Row>
						<Col md={{ span: 8, offset: 2 }}>
							<Row>
								<Col>
									<Image
										src="https://cocina-casera.com/wp-content/uploads/2016/02/migas-extremenas.jpeg"
										fluid
										thumbnail
									/>
								</Col>
								<Col id="posicion_nombre_plato">
									<h3>Migas extremeñas</h3>

									<Button variant="warning" size="sm" className="posicion_boton">
										Cuéntame más
									</Button>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</Carousel.Item>
			<Carousel.Item className="prueba">
				<Container>
					<Row>
						<Col md={{ span: 8, offset: 2 }}>
							<Row>
								<Col>
									<Image
										src="https://media-cdn.tripadvisor.com/media/photo-s/11/ea/cb/39/prueba-de-cerdo.jpg"
										fluid
										thumbnail
									/>
								</Col>
								<Col id="posicion_nombre_plato">
									<h3>Caldereta de cordero</h3>

									<Button variant="warning" size="sm" className="posicion_boton">
										Cuéntame más
									</Button>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</Carousel.Item>
			<Carousel.Item className="prueba">
				<Container>
					<Row>
						<Col md={{ span: 8, offset: 2 }}>
							<Row>
								<Col>
									<Image src="https://i.ytimg.com/vi/YUfYMvGZVA4/maxresdefault.jpg" fluid thumbnail />
								</Col>
								<Col id="posicion_nombre_plato">
									<h3>Caldereta de cordero</h3>

									<Button variant="warning" size="sm" className="posicion_boton">
										Cuéntame más
									</Button>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</Carousel.Item>
		</Carousel>

		/*<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						className="d-block w-100"
						src="https://www.xtrafondos.com/wallpapers/tierra-imaginaria-828.jpg"
						alt="First slide"
					/>
				</div>
				<div className="carousel-item">
					<img
						className="d-block w-100"
						src="https://www.xtrafondos.com/wallpapers/atardecer-en-la-playa-554.jpg"
						alt="Second slide"
					/>
				</div>
				<div className="carousel-item">
					<img
						className="d-block w-100"
						src="https://www.xtrafondos.com/wallpapers/pico-de-la-montana-en-suiza-388.jpg"
						alt="Second slide"
					/>
				</div>
			</div>
			<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true" />
				<span className="sr-only">Previous</span>
			</a>
			<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="sr-only">Next</span>
			</a>
		</div>*/
	);
};

import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/dishresult.scss";
import { Link, useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export const Dishresultcarousel = hola => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	//const dish_id = theid;
	//console.log(dish_id);
	//let dish_r = actions.getDish(dish_id);
	//console.log(dish_r);

	//let dish_r_id = dish_r[0].restaurant_id;
	//let dish_r_all = actions.getDishesOfRest(dish_r_id);
	//console.log(dish_r_all);
	//console.log(dish_r_id + "aaa");
	//let dish_r_tds = actions.getDish();
	//console.log(dish_r_tds + "bbb");
	//let dish_rest = actions.getRestaurant(dish_r_id);
	//console.log(dish_rest);

	return (
		<Carousel className="carouselmargen" id="carouselfondo">
			<Carousel.Item className="carouselmargen2">
				<Container>
					<Row>
						<Col md={{ span: 8, offset: 2 }}>
							<Row>
								<Col>
									<Image src={hola.dish_r_all.img} fluid thumbnail className="carrouimg" />
								</Col>
								<Col id="posicion_nombre_plato">
									<h3>{hola.dish_r_all.name}</h3>

									<Button variant="warning" size="sm" className="posicion_boton">
										Cuéntame más
									</Button>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</Carousel.Item>
			<Carousel.Item className="carouselmargen2">
				<Container>
					<Row>
						<Col md={{ span: 8, offset: 2 }}>
							<Row>
								<Col>
									<Image src={hola.dish_r_all.img} fluid thumbnail className="carrouimg" />
								</Col>
								<Col id="posicion_nombre_plato">
									<h3>{hola.dish_r_all.name}</h3>

									<Button variant="warning" size="sm" className="posicion_boton">
										Cuéntame más
									</Button>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</Carousel.Item>
			{/*<Carousel.Item className="carouselmargen2">
				<Container>
					<Row>
						<Col md={{ span: 8, offset: 2 }}>
							<Row>
								<Col>
									<Image
										src="https://media-cdn.tripadvisor.com/media/photo-s/11/ea/cb/39/prueba-de-cerdo.jpg"
										fluid
										thumbnail
										className="carrouimg"
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
			<Carousel.Item className="carouselmargen2">
				<Container>
					<Row>
						<Col md={{ span: 8, offset: 2 }}>
							<Row>
								<Col>
									<Image
										src="https://i.ytimg.com/vi/YUfYMvGZVA4/maxresdefault.jpg"
										fluid
										thumbnail
										className="carrouimg"
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
			</Carousel.Item>*/}
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

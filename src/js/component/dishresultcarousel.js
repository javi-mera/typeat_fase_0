import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/dishresult.scss";
import "../../styles/dishresultcarousel.scss";
import { Link, useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export const Dishresultcarousel = hola => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	const dish_id = theid;
	console.log(dish_id);

	return (
		<Carousel className="carouselmargen carousel-inner" id="carouselfondo">
			{hola.dish_r_all.map((e, index) => {
				if (e.id == dish_id) {
					return null;
				} else {
					return (
						<Carousel.Item key={index} className="carouselmargen2">
							<Container>
								<Row className="justify-content-center">
									<Col
										md={{ span: 6 }}
										id="card_carousel"
										className="shadow p-2 mb-2 bg-white rounded">
										<Row>
											<Col>
												<Image src={e.img} fluid thumbnail className="carrouimg" />
											</Col>
											<Col id="posicion_nombre_plato">
												<h3>{e.name}</h3>
												<Link
													to={{
														pathname: "/searchresult/" + e.id
													}}>
													<Button
														variant="warning"
														size="sm"
														className="posicion_boton justify-content-center"
														type="button"
														onClick={() => {
															actions.loadDishes();
														}}>
														Cuéntame más
													</Button>
												</Link>
											</Col>
										</Row>
									</Col>
								</Row>
							</Container>
						</Carousel.Item>
					);
				}
			})}
		</Carousel>
	);
};

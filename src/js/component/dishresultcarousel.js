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
			{hola.dish_r_all.map((e, index) => {
				return (
					<Carousel.Item key={index} className="carouselmargen2">
						<Container>
							<Row>
								<Col md={{ span: 8, offset: 2 }}>
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
													className="posicion_boton"
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
			})}
		</Carousel>
	);
};

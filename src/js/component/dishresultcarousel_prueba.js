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
		<div className="card mb-3" style="max-width: 540px;">
			<div className="row no-gutters">
				<div className="col-md-4">
					<img src={hola.dish_r_all.img} className="card-img" alt="..." />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{hola.dish_r_all.name}</h5>
						<button type="button" classNameName="btn btn-primary">
							Tell me more
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

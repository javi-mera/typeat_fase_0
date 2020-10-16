import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/dish.scss";
import { Heartbutton } from "../component/heartbutton";

export const Favdish = dish => {
	const { store, actions } = useContext(Context);
	useEffect(() => {}, []);

	let dish_r = actions.getDish(dish.dishes.id);
	return (
		<div className="container dishcard2">
			<div className="row shadow mb-2 mr-0 bg-white">
				<div className="col-sm-12 col-md-6 col-lg-6 styleimg">
					<img
						className="imagina"
						src={dish.dishes.img}
						alt="Este es el ejemplo de un texto alternativo"
						height="200"
						width="372"
					/>
				</div>
				<div className="col-sm-12 col-md-6 col-lg-6 stylecard">
					<div className="card-body ">
						<div className="row justify-content-between">
							<h4 className="text-center"> {dish.dishes.name}</h4>
							<Heartbutton id={dish_r[0].id} name={dish_r[0].name} />
						</div>

						<h6 className="text-left">{actions.loadRestaurantName(dish.dishes.restaurant_id)}</h6>
						<h6 className="text-left">{actions.loadRestaurantAdd(dish.dishes.restaurant_id)}</h6>
						<h6 className="text-left">{actions.loadRestaurantPhn(dish.dishes.restaurant_id)}</h6>

						<Link
							to={{
								pathname: "/searchresult/" + dish.dishes.id
							}}>
							<button
								type="button"
								className="btn btn-success"
								onClick={() => {
									actions.loadDishes();
								}}>
								Más info
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/dish.scss";

export const Dish = dish => {
	const { store, actions } = useContext(Context);
	//console.log(users);
	//console.log(store.dishes[0]);
	useEffect(() => {
		actions.loadRestaurants(dish.dishes.restaurant_id);
	}, []);

	return (
		<div className="container dishcard">
			<div className="row">
				<div className="col-6 stylecard">
					<h4 className="card-header">Restaurante: {store.restaurantInfo.name}</h4>
					<h5 className="card-header">Plato: {dish.dishes.name}</h5>
					<div className="card-body">
						<p className="card-text">Restaurante: {dish.dishes.restaurant_name}</p>
						<p className="card-text">descripción: {dish.dishes.description}</p>
						<Link
							to={{
								pathname: "/searchresult/" + dish.dishes.id
							}}>
							<button type="button" className="btn btn-primary" onClick={() => {}}>
								Más info
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

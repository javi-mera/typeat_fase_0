import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/dish.scss";

export const Dish = dish => {
	const { store, actions } = useContext(Context);
	//console.log(users);
	//console.log(store.dishes[0]);

	return (
		<div className="container dishcard">
			<div className="row">
				<div className="col-6 stylecard">
					<h5 className="card-header">Plato: {dish.dishes.name}</h5>
					<div className="card-body">
						<p className="card-text">descripción: {dish.dishes.restaurant_name}</p>
						<p className="card-text">descripción: {dish.dishes.description}</p>
						<Link
							to={{
								pathname: "/searchresult/" + dish.dishes.id
							}}>
							<button
								type="button"
								className="btn btn-primary"
								onClick={() => {
									"hola";
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

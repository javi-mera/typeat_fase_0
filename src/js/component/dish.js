import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/dish.scss";
export const Dish = users => {
	const { store, actions } = useContext(Context);
	//console.log(users);

	return (
		<div className="container dishcard">
			<div className="row">
				<div className="col-6 stylecard">
					<h5 className="card-header">Plato: {users.dishes.name}</h5>
					<div className="card-body">
						<h5 className="card-title">id: {users.dishes.id}</h5>
						<p className="card-text">descripción: {users.dishes.description}</p>
						<a href="#" className="btn btn-primary">
							Más info
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

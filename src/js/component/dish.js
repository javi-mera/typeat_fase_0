import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/dish.scss";

export const Dish = dish => {
	const { store, actions } = useContext(Context);
	//const [plato, setPlato] = useState();
	//console.log(users);
	//console.log(store.dishes[0]);
	useEffect(() => {
		//actions.loadRestaurant(dish.dishes.restaurant_id);
	}, []);

	return (
		<div className="container dishcard">
			<div className="row shadow mb-2 mr-0 bg-white">
				<div className="col-sm-12 col-md-6 col-lg-6 styleimg">
					<img
						className="imagina"
						src={dish.dishes.img}
						alt="Este es el ejemplo de un texto alternativo"
						height="200"
						width="372"
						//max-width="600"
					/>
				</div>
				<div className="col-sm-12 col-md-6 col-lg-6 stylecard">
					<div className="card-body ">
						<h4 className="text-center"> {dish.dishes.name}</h4>
						<h6 className="text-left">{actions.loadRestaurantName(dish.dishes.restaurant_id)}</h6>
						<h6 className="text-left">{actions.loadRestaurantAdd(dish.dishes.restaurant_id)}</h6>
						<h6 className="text-left">{actions.loadRestaurantPhn(dish.dishes.restaurant_id)}</h6>

						{/*<p className="card-text">Descripción: {dish.dishes.description}</p>*/}
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

import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/dishresult.scss";
import { Link, useParams } from "react-router-dom";
import RatingStar from "../component/ratingstar";

export const Dishresult = users => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	const dish_id = theid;
	//console.log(dish_id);
	let dish_r = actions.getDish(dish_id);
	//console.log(dish_r[0].name);
	return (
		<div className="container fondocard shadow p-4 mb-4 bg-white">
			<div className="row">
				<div className="col">
					<h1 className="text-center margentitulo">
						<ins>{actions.loadRestaurant(dish_r[0].restaurant_id)}</ins>
					</h1>
					<div className="row">
						<img className="col-8 img-responsive" src={dish_r[0].img} alt="Chania" />
						<div className="col-4">
							<h3 className="text-center platoname">{dish_r[0].name}</h3>
							<RatingStar />

							<p>{dish_r[0].description}</p>

							<span type="button" id="fav" className=" btn btn-outline-warning fab fa-gratipay mt-auto" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

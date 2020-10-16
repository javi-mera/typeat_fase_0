import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/dishresult.scss";
import { Link, useParams } from "react-router-dom";
import { Heartbutton } from "../component/heartbutton";

export const Dishresult = users => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	const dish_id = theid;
	let dish_r = actions.getDish(dish_id);
	return (
		<div className="container fondocard shadow p-4 mb-4 bg-white rounded">
			<div className="row">
				<div className="col">
					<h1 className="text-center margentitulo">{actions.loadRestaurantName(dish_r[0].restaurant_id)}</h1>
					<div className="row">
						<img className="col-8 img-responsive" src={dish_r[0].img} alt="Chania" />
						<div className="col-4">
							<div className="row justify-content-between titlebut">
								<h3 className="text-left platoname">{dish_r[0].name}</h3>
								{store.token === "" ? null : <Heartbutton name={dish_r[0].name} id={dish_r[0].id} />}
							</div>
							<p>{dish_r[0].description}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

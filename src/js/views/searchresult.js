import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Dishresult } from "../component/dishresult";
import { Dishresultcarousel } from "../component/dishresultcarousel";

export const Searchresult = () => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	const dish_id = theid;
	//console.log(dish_id);
	let dish_r = actions.getDish(dish_id);
	//console.log(dish_r);

	let dish_r_id = dish_r[0].restaurant_id;
	let dish_r_all = actions.getDishesOfRest(dish_r_id);
	console.log(dish_r_all);

	return (
		<div className="base">
			<Dishresult />
			<Dishresultcarousel dish_r_all={dish_r_all} />;
		</div>
	);
};

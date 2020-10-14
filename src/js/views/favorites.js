import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Dish } from "../component/dish";
import "../../styles/home.scss";

export const Favorites = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.favDishes();
	}, []);
	console.log(store.favorites);
	return (
		<div className="base">
			<div className="jumbotron" id="jumbobackground" />
			<div className="row">
				<div className="card col-12 base border">
					{store.dishes.map((e, index) => {
						return <Dish key={index} dishes={e} />;
					})}
				</div>
			</div>
		</div>
	);
};

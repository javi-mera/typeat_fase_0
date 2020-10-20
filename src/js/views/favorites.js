import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Favdish } from "../component/favdish";
import "../../styles/home.scss";

export const Favorites = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.favDishes();
	}, []);

	return (
		<div className="base">
			<div className="jumbotron" id="jumbobackground" />
			<div className="row justify-content-center">
				<div className="card col-6 base border">
					{store.dishes.map((e, index) => {
						return <Favdish key={index} dishes={e} />;
					})}
				</div>
			</div>
		</div>
	);
};

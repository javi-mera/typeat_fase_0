import React, { Component } from "react";
import RestaurantSearchForm from "../component/restaurantsearchform";
import "../../styles/jumbotron.scss";

export const Jumbotron = () => {
	return (
		<div className="container-fluid" id="jumbosize">
			<RestaurantSearchForm />
		</div>
	);
};

import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Jumbotron } from "../component/jumbotron";
import { Funcionamiento } from "../component/funcionamiento";
import { Linea } from "../component/salto";
import { Redirect } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-6 base">
			<Jumbotron />
			<Linea />
			<Funcionamiento />
		</div>
	);
};

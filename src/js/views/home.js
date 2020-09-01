import React from "react";
import "../../styles/home.scss";
import { Jumbotron } from "../component/jumbotron";
import { Funcionamiento } from "../component/funcionamiento";
import { Linea } from "../component/salto";

export const Home = () => (
	<div className="text-center mt-5">
		<Jumbotron />
		<Linea />
		<Funcionamiento />
	</div>
);

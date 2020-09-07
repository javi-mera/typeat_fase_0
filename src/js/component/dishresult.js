import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/dishresult.scss";
import { Link, useParams } from "react-router-dom";

export const Dishresult = users => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	const chId = theid - 1;
	console.log(theid);
	debugger;
	return (
		<div>
			hola
			<h1>Hola</h1>
			{console.log(store.users)}
			{console.log(store.demo[0].title)}
		</div>
	);
};

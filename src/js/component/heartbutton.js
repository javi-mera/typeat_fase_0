import React, { useContext } from "react";
import { Context } from "../store/appContext";
export const Heartbutton = l => {
	const { store, actions } = useContext(Context);
	console.log(l);
	let favs = store.favorites.filter(item => item == l.name);
	if (favs.length === 0) {
		return (
			<button
				onClick={event => {
					actions.addFavorites(l.name, event.target);
					console.log(event.target.classList);
				}}
				type="button"
				id={l.id}
				className="btn btn-outline-warning fab fa-gratipay"
			/>
		);
	} else {
		return (
			<button
				onClick={event => {
					actions.addFavorites(l.name, event.target);
					console.log(event.target.classList);
				}}
				type="button"
				id={l.id}
				className="btn btn-outline-warning fab fa-gratipay active"
			/>
		);
	}
};
//["btn", "btn-outline-warning", "fab", "fa-gratipay", "active", value: "btn btn-outline-warning fab fa-gratipay active"]

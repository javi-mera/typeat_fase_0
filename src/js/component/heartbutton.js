import React, { useContext } from "react";
import { Context } from "../store/appContext";
export const Heartbutton = l => {
	const { store, actions } = useContext(Context);
	let favs = store.favorites.filter(item => item.id == l.id);
	if (favs.length === 0) {
		return (
			<button
				onClick={event => {
					actions.addFavorites(l, event.target);
				}}
				type="button"
				id={l.id}
				//className="btn smallbtn btn-outline-warning fab fa-gratipay"
				className="btn smallbtn btn-yellow fab fa-gratipay"
			/>
		);
	} else {
		return (
			<button
				onClick={event => {
					actions.addFavorites(l, event.target);
				}}
				type="button"
				id={l.id}
				//className="btn smallbtn btn-outline-warning fab fa-gratipay active"
				className="btn smallbtn btn-yellow fab fa-gratipay active"
			/>
		);
	}
};

import React, { useState, useContext, setStore } from "react";
import { Link } from "react-router-dom";
import "../../styles/jumbotron.scss";
import { MainForm } from "./mainform";
import { Context } from "../store/appContext";

export const RestaurantSearchForm = () => {
	const { store, actions } = useContext(Context);
	const [textInputLugar, setTextInputLugar] = useState();
	const [textInputPlato, setTextInputPlato] = useState();
	let datosForm = { Lugar: textInputLugar, Plato: textInputPlato };
	return (
		<form className="form">
			<label>De qué lugar quieres conocer sus platos tradicionales?</label>
			<div className="form-group" id="lugar">
				<input
					type="text"
					className="forminput"
					id="formGroupExampleInput"
					placeholder="Badajoz"
					onChange={e => setTextInputLugar(e.target.value)}
				/>
			</div>
			<label>Qué plato típico te apetece comer?</label>
			<div className="form-group" id="plato">
				<input
					type="text"
					className="forminput"
					id="formGroupExampleInput2"
					placeholder="Migas"
					onChange={e => setTextInputPlato(e.target.value)}
				/>
			</div>
			<div>
				<Link
					to={{
						pathname: "/search",
						search: "?" + "lugar=" + datosForm.Lugar + "&" + "plato=" + datosForm.Plato
					}}>
					<button
						type="button"
						className="botoninicio"
						onClick={() => {
							actions.inputForm(datosForm);
						}}>
						Vamos a ello!
					</button>
				</Link>
			</div>
		</form>
	);
};

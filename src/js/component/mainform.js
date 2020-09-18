import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/jumbotron.scss";
import "../../styles/search.scss";
import { RestaurantSearchForm } from "../component/restaurantsearchform";

export const MainForm = () => {
	const { store, actions } = useContext(Context);
	const [textInputLugar, setTextInputLugar] = useState();
	const [textInputPlato, setTextInputPlato] = useState();
	let datosForm = { Lugar: textInputLugar, Plato: textInputPlato };
	return (
		<div className="container cont_width">
			<div className="row">
				<div className="col text-center">
					<label htmlFor="formGroupExampleInput">Lugar</label>
					<input
						type="text"
						className="form-control"
						id="formGroupExampleInput"
						placeholder={store.formInfo.Lugar}
						onChange={e => setTextInputLugar(e.target.value)}
					/>
				</div>
				<div className="col text-center">
					<label htmlFor="formGroupExampleInput2">Plato típico </label>
					<input
						type="text"
						className="form-control"
						id="formGroupExampleInput2"
						placeholder={store.formInfo.Plato}
						onChange={e => setTextInputPlato(e.target.value)}
					/>
				</div>
				<div className="col text-center">
					<br />

					<button
						type="button"
						className="botoninicio botond  justify-content-center alignbutton"
						onClick={() => {
							console.log(datosForm);
						}}>
						Vamos a ello!
					</button>
				</div>
			</div>
		</div>
	);
};

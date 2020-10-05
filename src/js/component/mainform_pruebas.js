import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/jumbotron.scss";
import "../../styles/search.scss";

export const MainForm = parsed => {
	const { store, actions } = useContext(Context);
	const [textInputLugar, setTextInputLugar] = useState(parsed.info.lugar);
	const [textInputPlato, setTextInputPlato] = useState(parsed.info.plato);
	let datosForm = { Lugar: textInputLugar, Plato: textInputPlato };
	//console.log(parsed.info.lugar);Pasar datos al store.
	return (
		<div className="container cont_width">
			<div className="row">
				<div className="col text-center">
					<label htmlFor="formGroupExampleInput">Lugar</label>
					<input
						type="text"
						className="form-control"
						id="formGroupExampleInput"
						placeholder={textInputLugar}
						onChange={e => setTextInputLugar(e.target.value)}
					/>
				</div>
				<div className="col text-center">
					<label htmlFor="formGroupExampleInput2">Plato típico </label>
					<input
						type="text"
						className="form-control"
						id="formGroupExampleInput2"
						placeholder={textInputPlato}
						onChange={e => setTextInputPlato(e.target.value)}
					/>
				</div>
				<div className="col botondd">
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

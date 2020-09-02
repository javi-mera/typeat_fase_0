import React from "react";
import { Link } from "react-router-dom";
import "../../styles/jumbotron.scss";

export const RestaurantSearchForm = () => {
	return (
		<form>
			<label>De qué lugar quieres conocer sus platos tradicionales?</label>
			<div className="form-group" id="lugar">
				<input type="text" className="forminput" id="formGroupExampleInput" placeholder="Badajoz" />
			</div>
			<label>Qué plato típico te apetece comer?</label>
			<div className="form-group" id="plato">
				<input type="text" className="forminput" id="formGroupExampleInput2" placeholder="Migas" />
			</div>

			<Link to="/search/">
				<button
					type="button"
					className="botoninicio"
					onSubmit={() => {
						console.log("hola");
					}}>
					Vamos a ello!
				</button>
			</Link>
		</form>
	);
};

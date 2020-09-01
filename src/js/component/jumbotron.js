import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/jumbotron.scss";

export const Jumbotron = () => {
	return (
		<div className="container-fluid" id="jumbosize">
			<div className="jumbotron">
				<form>
					<label>De qué lugar quieres conocer sus platos tradicionales?</label>
					<div className="form-group" id="extra">
						<input type="text" className="forminput" id="formGroupExampleInput" placeholder="Badajoz" />
					</div>
					<label>Qué plato típico te apetece comer?</label>
					<div className="form-group" id="extra">
						<input type="text" className="forminput" id="formGroupExampleInput2" placeholder="Migas" />
					</div>

					<Link to="/">
						<button type="button" className="botoninicio">
							Vamos a ello!
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
};

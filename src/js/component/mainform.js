import React, { Component } from "react";
import "../../styles/search.scss";

export const MainForm = props => {
	console.log(props);
	return (
		<div className="container cont_width">
			<div className="row">
				<div className="col">
					<label htmlFor="formGroupExampleInput">Lugar</label>
					<input
						type="text"
						classNameName="form-control"
						id="formGroupExampleInput"
						placeholder="Example input placeholder"
					/>
				</div>
				<div className="col">
					<label htmlFor="formGroupExampleInput2">Plato típico </label>
					<input
						type="text"
						classNameName="form-control"
						id="formGroupExampleInput2"
						placeholder="Another input placeholder"
					/>
				</div>
				<div className="col">
					<button
						type="button"
						className="botoninicio"
						onSubmit={() => {
							console.log("hola");
						}}>
						Vamos a ello!
					</button>
				</div>
			</div>
		</div>
	);
};

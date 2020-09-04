import React, { Component } from "react";
import "../../styles/search.scss";

export const MainForm = props => {
	return (
		<div className="container cont_width">
			<div className="row">
				<div className="col">
					<label htmlFor="formGroupExampleInput">Lugar</label>
					<input
						type="text"
						className="form-control"
						id="formGroupExampleInput"
						placeholder="Example input placeholder"
					/>
				</div>
				<div className="col">
					<label htmlFor="formGroupExampleInput2">Plato típico </label>
					<input
						type="text"
						className="form-control"
						id="formGroupExampleInput2"
						placeholder="Another input placeholder"
					/>
				</div>
				<div className="col justify-content-center alignbutton">
					<br />

					<button type="button" className="botoninicio botond" onSubmit={() => {}}>
						Vamos a ello!
					</button>
				</div>
			</div>
		</div>
	);
};

import React, { Component } from "react";
import "../../styles/search.scss";

export const MainForm = props => {
	return (
		<div className="container cont_width">
			<div className="row">
				<div className="col text-center">
					<label htmlFor="formGroupExampleInput">Lugar</label>
					<input
						type="text"
						className="form-control"
						id="formGroupExampleInput"
						placeholder="Example input placeholder"
					/>
				</div>
				<div className="col text-center">
					<label htmlFor="formGroupExampleInput2">Plato típico </label>
					<input
						type="text"
						className="form-control"
						id="formGroupExampleInput2"
						placeholder="Another input placeholder"
					/>
				</div>
				<div className="col text-center">
					<br />

					<button
						type="button"
						className="botoninicio botond  justify-content-center alignbutton"
						onSubmit={() => {}}>
						Vamos a ello!
					</button>
				</div>
			</div>
		</div>
	);
};

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/registro.scss";

export const Pruebas = () => {
	const { store, actions } = useContext(Context);

	return (
		<form className="align-self-center" method="POST" action="/upload" encType="multipart/form-data">
			<div className="form-group">
				<label htmlFor="inputFile" name="file">
					File input
				</label>
				<input type="file" name="file" multiple />
			</div>
			<button type="submit" className="btn btn-default" onClick={e => actions.uploadImgDishes(e.target.files[0])}>
				{" "}
				Submit
			</button>
		</form>
	);
};

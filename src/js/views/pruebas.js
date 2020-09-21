import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/registro.scss";

export const Pruebas = () => {
	const { actions } = useContext(Context);
	const [newFile, setNewFile] = useState();
	let datos = newFile;
	//const input = document.getElementById("fileinput");method="POST";action="/upload"

	return (
		<form className="align-self-center" encType="multipart/form-data">
			<div className="form-group">
				<label htmlFor="inputFile" name="fileinput">
					File input
				</label>
				<input type="file" name="fileinput" multiple onChange={e => setNewFile(e.target.files[0])} />
			</div>
			<button type="submit" className="btn btn-default" onClick={() => actions.uploadImgDishes(datos)}>
				{" "}
				Submit
			</button>
		</form>
	);
};

import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/registro.scss";

export const Pruebas = () => {
	const { actions } = useContext(Context);
	const [newFile, setNewFile] = useState();
	let datos = { file: newFile };
	//const input = document.getElementById("fileinput");
	return (
		<form className="align-self-center" method="POST" action="/upload" encType="multipart/form-data">
			<div className="form-group">
				<label htmlFor="inputFile" name="file">
					File input
				</label>
				<input type="file" name="file" id="fileinput" multiple onChange={e => setNewFile(e.target.value)} />
			</div>
			<button type="submit" className="btn btn-default" onClick={() => actions.uploadImgDishes(datos)}>
				{" "}
				Submit
			</button>
		</form>
	);
};

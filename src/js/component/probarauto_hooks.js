import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const MyInput = () => {
	const { store, actions } = useContext(Context);
	const [ciudad, setCiudad] = useState("Madrid");
	const [plato, setPlato] = useState();

	useEffect(() => {
		actions.loadCities();
		actions.loadDishes();
	}, []);
	return (
		<form className="form">
			<div className="form-group" id="lugar">
				{" "}
				<Form>
					<Form.Group controlId="ControlSelect1">
						<Form.Label id="1">¿De qué lugar quieres conocer sus platos tradicionales?</Form.Label>
						<Form.Control
							as="select"
							value="{ciudad}"
							onChange={e => {
								setCiudad(e.target.value);
								actions.renderSearchInfo("?" + "lugar=" + e.target.value + "&" + "plato=");
							}}>
							{store.city.map((item, index) => {
								//console.log(item);
								return <option key={index}>{item.name}</option>;
							})}
						</Form.Control>
					</Form.Group>

					<Form.Group controlId="ControlSelect2">
						<Form.Label>¿Qué plato típico te apetece comer?</Form.Label>
						<Form.Control
							as="select"
							value={plato}
							onChange={e => {
								setPlato(e.target.value);
							}}>
							{store.dishes.map((item, index) => {
								//console.log(item);
								return <option key={index}>{item.name}</option>;
							})}
						</Form.Control>
					</Form.Group>
				</Form>
			</div>

			<Link
				to={{
					pathname: "/search",
					search: "?" + "lugar=" + ciudad + "&" + "plato=" + plato
				}}>
				<button type="button" className="botoninicio">
					Vamos a ello!
				</button>
			</Link>
		</form>
	);
};

export default MyInput;

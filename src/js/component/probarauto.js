import React, { useState, useContext, setStore, useEffect } from "react";
import Autocomplete from "react-autocomplete";
import { Link } from "react-router-dom";
import { Search } from "../views/search";
import { Context } from "../store/appContext";

const MyInput = () => {
	const { store, actions } = useContext(Context);
	const [ciudad, setCiudad] = useState("");
	const [plato, setPlato] = useState("");

	useEffect(() => {
		actions.loadCities();
		actions.loadDishes();
	}, []);

	return (
		<form className="form">
			<label>¿De qué lugar quieres conocer sus platos tradicionales?</label>
			<div className="form-group" id="lugar">
				{" "}
				<Autocomplete
					items={store.city}
					shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
					getItemValue={item => item.name}
					hideResults={true}
					renderItem={(item, highlighted) => {
						if (store.city.length > 0) {
							return (
								<div
									key={item.id + Math.random()}
									style={{ backgroundColor: highlighted ? "#eee" : "transparent" }}>
									{item.name}
								</div>
							);
						} else {
							return <div key={item.id + Math.random()} className="d-none" />;
						}
					}}
					value={ciudad}
					onChange={e => setCiudad(e.target.value)}
					onSelect={ciudad => {
						setCiudad(ciudad);
						actions.duplicateDishes("?" + "lugar=" + ciudad + "&" + "plato=");
					}}
				/>
			</div>
			<label>¿Qué plato típico te apetece comer?</label>
			<div className="form-group" id="lugar">
				{" "}
				<Autocomplete
					items={store.dishes}
					shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
					getItemValue={item => item.name}
					hideResults={true}
					renderItem={(item, highlighted) => {
						if (store.dishes.length > 0) {
							return (
								<div
									key={item.id + Math.random()}
									style={{ backgroundColor: highlighted ? "#eee" : "transparent" }}>
									{item.name}
								</div>
							);
						} else {
							return <div key={item.id + Math.random()} className="d-none" />;
						}
					}}
					value={plato}
					onChange={e => setPlato(e.target.value)}
					onSelect={plato => setPlato(plato)}
				/>
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

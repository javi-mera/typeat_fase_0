import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Autocomplete from "react-autocomplete";
import "../../styles/jumbotron.scss";
import "../../styles/search.scss";
export const MainForm = parsed => {
	//console.log(parsed);
	const { store, actions } = useContext(Context);
	const [ciudad, setCiudad] = useState(parsed.info.lugar);
	const [plato, setPlato] = useState(parsed.info.plato);
	const [err, setErr] = useState(false);

	return (
		<div className="container cont_width">
			<div className="row">
				<div className="col text-center">
					<label htmlFor="formGroupExampleInput">Lugar</label>
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
						onChange={e => {
							setCiudad(e.target.value);
							setPlato("");
						}}
						onSelect={ciudad => {
							setCiudad(ciudad);
							setErr(false);
							actions.renderSearchInfo("?lugar=" + ciudad + "&plato=");
						}}
					/>
					{err == false ? "" : <p>error</p>}
				</div>
				<div className="col text-center">
					<label htmlFor="formGroupExampleInput2">Plato típico </label>
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
						onSelect={plato => {
							setPlato(plato);
						}}
					/>
				</div>
			</div>
			<div className="col botondd">
				<br />
				{ciudad.length > 0 ? (
					<button
						type="button"
						className="botoninicio botond  justify-content-center alignbutton"
						onClick={() => {
							actions.renderSearchInfo("?" + "lugar=" + ciudad + "&" + "plato=" + plato);
							actions.duplicateDishes("?" + "lugar=" + ciudad + "&" + "plato=" + plato);
							actions.mapMarkers({ lugar: ciudad, plato: "" });
						}}>
						Vamos a ello!
					</button>
				) : (
					<button type="button" className="botoninicio" onClick={() => setErr(true)}>
						Vamos a ello
					</button>
				)}
			</div>
		</div>
	);
};

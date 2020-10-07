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
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-sm-12 col-md-3 col-lg-3 text-center">
					<label>Lugar</label>
					<br />
					<Autocomplete
						className="text-center"
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
							actions.duplicateDishes("?" + "lugar=" + ciudad + "&" + "plato=");
						}}
						onSelect={ciudad => {
							setCiudad(ciudad);
							setErr(false);
						}}
					/>
					{err == false ? "" : <p>error</p>}
				</div>
				<div className="col-sm-12 col-md-3 col-lg-3 text-center">
					<label htmlFor="formGroupExampleInput2">Plato típico </label>
					<br />
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
						className="text-center"
					/>
				</div>
				<div className="col-sm-12 col-md-3 col-lg-3 text-center">
					<br />
					{ciudad.length > 0 ? (
						<button
							type="button"
							className="letsgo2"
							onClick={() => {
								actions.renderSearchInfo("?" + "lugar=" + ciudad + "&" + "plato=" + plato);
							}}>
							Vamos a ello!
						</button>
					) : (
						<button type="button" className="letsgo2" onClick={() => setErr(true)}>
							Vamos a ello
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Map, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../../styles/mapsLeaflet.scss";
import { MarkerIcon } from "./react-leaflet-icon.js";
const MapView = parsed => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.mapMarkers(parsed.info);
	}, []);
	console.log("coordenadas iniciales " + store.coor);
	return (
		<div>
			{store.coor.length === 0 && <div> Mapa cargando</div>}
			{store.coor.length !== 0 && (
				<Map center={store.coor[0].coord} zoom={12}>
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
					/>
					{store.coor.map((e, index) => {
						console.log(e.name);
						let position = e.coord;
						console.log(position);
						return (
							<Marker key={index} position={position}>
								<Tooltip direction="top" opacity={1}>
									<span> {e.name} </span>
								</Tooltip>
							</Marker>
						);
					})}
				</Map>
			)}
		</div>
	);
};
export default MapView;

import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../../styles/mapsLeaflet.scss";
import { MarkerIcon } from "./react-leaflet-icon.js";

const MapView = parsed => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadCities();
		//actions.mapMarkers(parsed.info);
	}, []);
	console.log(store.coordenadas[0]);
	return (
		<Map center={store.coordenadas[0]} zoom={12}>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution="© <a href=&quot;https://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
			/>
			{store.coordenadas.map((e, index) => {
				return <Marker key={index} position={e} />;
			})}
		</Map>
	);
};
export default MapView;

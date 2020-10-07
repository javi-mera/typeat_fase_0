import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Map, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../../styles/mapsLeaflet.scss";
import { MarkerIcon } from "./react-leaflet-icon.js";
const MapView = parsed => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadCities();
		actions.mapMarkers(parsed.info);
	}, []);
	console.log(store.coordenadas[0]);
	return (
		<Map center={store.coordenadas[0]} zoom={12}>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
			/>
			{store.coordenadas.map((e, index) => {
				return (
					<Marker key={index} position={e}>
						<Tooltip direction="top" opacity={1}>
							<span> {"lat: " + e.lat + ", " + "lng: " + e.lng} </span>
						</Tooltip>
					</Marker>
				);
			})}
		</Map>
	);
};
export default MapView;

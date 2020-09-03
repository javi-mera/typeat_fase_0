import React, { Component } from "react";
import GoogleMaps from "google-maps-react";
import "../../styles/maps.scss";

export default class Maps extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<GoogleMaps
						apiKey={"AIzaSyCaH9XsoiM05JLFO0XG_K1m2P7yiT8w6cw"}
						style={{ height: "400px", width: "300px" }}
						zoom={12}
						center={{ lat: 40.412735, lng: -3.695428 }}
						markers={[{ lat: 40.4127971, lng: -3.695463 }, { lat: 40.41279, lng: -3.695469 }]}
					/>
				</div>
			</div>
		);
	}
}

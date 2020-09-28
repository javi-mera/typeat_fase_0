import React, { useState, useContext, setStore } from "react";
import Autocomplete from "react-autocomplete";
import { Link } from "react-router-dom";
import { Search } from "../views/search";

class MyInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lugar: "",
			plato: ""
		};
	}

	render() {
		return (
			<form className="form">
				<label>De qué lugar quieres conocer sus platos tradicionales?</label>
				<div className="form-group" id="lugar">
					{" "}
					<Autocomplete
						items={[
							{ id: "1", label: "Madrid" },
							{ id: "2", label: "Barcelona" },
							{ id: "3", label: "Badajoz" }
						]}
						shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
						getItemValue={item => item.label}
						renderItem={(item, highlighted) => (
							<div key={item.id} style={{ backgroundColor: highlighted ? "#eee" : "transparent" }}>
								{item.label}
							</div>
						)}
						value={this.state.lugar}
						onChange={e => this.setState({ lugar: e.target.value })}
						onSelect={lugar => this.setState({ lugar })}
					/>
				</div>
				<label>Qué plato típico te apetece comer?</label>
				<div className="form-group" id="plato">
					<Autocomplete
						items={[
							{ id: "1", label: "Cocido" },
							{ id: "2", label: "Fabada" },
							{ id: "3", label: "Calamares" },
							{ id: "4", label: "Migas" },
							{ id: "5", label: "Mejillones" },
							{ id: "6", label: "Alcachofas" },
							{ id: "7", label: "Flamenquines" }
						]}
						shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
						getItemValue={item => item.label}
						renderItem={(item, highlighted) => (
							<div key={item.id} style={{ backgroundColor: highlighted ? "#eee" : "transparent" }}>
								{item.label}
							</div>
						)}
						value={this.state.plato}
						onChange={e => this.setState({ plato: e.target.value })}
						onSelect={plato => this.setState({ plato })}
					/>
				</div>
				<Link
					to={{
						pathname: "/search",
						search: "?" + "lugar=" + this.state.lugar + "&" + "plato=" + this.state.plato
					}}>
					<button type="button" className="botoninicio">
						Vamos a ello!
					</button>
				</Link>
			</form>
		);
	}
}
export default MyInput;

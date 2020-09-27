import React, { useState, useContext, setStore } from "react";
import Autocomplete from "react-autocomplete";
import { Link } from "react-router-dom";

class MyInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			plato: ""
		};
	}

	render() {
		return (
			<div>
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
					value={this.state.value}
					onChange={e => this.setState({ value: e.target.value })}
					onSelect={value => this.setState({ value })}
				/>
				<Autocomplete
					items={[
						{ id: "1", label: "Cocido" },
						{ id: "2", label: "Fabada" },
						{ id: "3", label: "Calamares" }
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
				<Link
					to={{
						pathname: "/search",
						search: "?" + "lugar=" + this.state.value + "&&" + "plato=" + this.state.plato
					}}>
					<button type="button" className="botoninicio">
						Vamos a ello!
					</button>
				</Link>
			</div>
		);
	}
}

export default MyInput;

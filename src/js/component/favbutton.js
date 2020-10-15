import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
export const Favbutton = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="btn-group mr-2">
			<Dropdown>
				<Dropdown.Toggle variant="warning" id="dropdown-basic">
					Mis favoritos
				</Dropdown.Toggle>
				<Dropdown.Menu>
					{store.favorites.map((item, index) => {
						//console.log(item);
						return (
							<Dropdown.Item className="list-group-item" key={index}>
								<Link to="/favorites">{item.name}</Link>
							</Dropdown.Item>
						);
					})}
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

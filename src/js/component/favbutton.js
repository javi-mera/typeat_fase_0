import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Dropdown from "react-bootstrap/Dropdown";
export const Favbutton = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<Dropdown>
				<Dropdown.Toggle variant="warning" id="dropdown-basic">
					Mis favoritos
				</Dropdown.Toggle>
				<Dropdown.Menu>
					{store.favorites.map((item, index) => {
						//console.log(item);
						return (
							<Dropdown.Item className="list-group-item" key={index}>
								{item}
							</Dropdown.Item>
						);
					})}
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

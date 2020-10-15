import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Dropdown from "react-bootstrap/Dropdown";
export const Logoutbutton = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="btn-group mr-2">
			<button type="button" className="btn btn-outline-success">
				{store.log}
			</button>
			<button
				onClick={e => {
					actions.logoutfunction();
					console.log(e);
				}}
				type="button"
				className="btn btn-danger far fa-times-circle"
			/>
			{/*<Dropdown>
				<Dropdown.Toggle variant="dark" id="dropdown-basic">
					{store.log}
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item>
						<button
							onClick={e => {
								actions.logoutfunction();
								console.log(e);
							}}
							type="button"
							className="btn">
							Desconectar
						</button>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown> */}
		</div>
	);
};

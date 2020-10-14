import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { Favbutton } from "../component/favbutton";
import { Logoutbutton } from "./logoutbutton";
import { Context } from "../store/appContext";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<header className="navbar navbar-inverse navbar-fixed-top bs-docs-nav btn-group" role="banner">
			<div className="container col-12 ancho">
				<div className="col-auto navbar-header">
					<Link to="/">
						<h1 className="navbar-brand">TYPEAT</h1>
					</Link>
				</div>
				<div className="btn-group">
					{store.token === "" ? (
						<Link to="/login">
							<button type="button" className="btn btn-light">
								Iniciar sesión
							</button>
						</Link>
					) : (
						<div>
							<Favbutton />
							<Logoutbutton />
							<div />
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

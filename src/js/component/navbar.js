import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/rigo-baby.jpg";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/">
				<img src={Logo} width="30" height="30" alt="" loading="lazy" />
			</Link>

			<Link to="/login">
				<button type="button" className="btn btn-info">
					Iniciar sesión
				</button>
			</Link>
		</nav>
	);
};

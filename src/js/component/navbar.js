import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Favbutton } from "../component/favbutton";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		/*<nav classNameName="navbar navbar-light bg-light">
			<Link to="/">
				<img src={Logo} width="30" height="30" alt="" loading="lazy" />
			</Link>

			<Link to="/login">
				<button type="button" classNameName="btn btn-info">
					Iniciar sesión
				</button>
			</Link>
        </nav>*/

		<header className="navbar navbar-inverse navbar-fixed-top bs-docs-nav " role="banner">
			<div className="container col-12 ancho">
				<div className="col-auto navbar-header">
					<Link to="/">
						<h1 className="navbar-brand">TYPEAT</h1>
					</Link>
				</div>

				<ul className="col-auto nav navbar-nav navbar-right">
					<li>
						<Link to="/login">
							<button type="button" className="btn btn-warning">
								Iniciar sesión
							</button>
						</Link>
					</li>
				</ul>
			</div>
			<Favbutton />
		</header>
	);
};

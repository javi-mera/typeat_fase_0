import React, { Component } from "react";
import "../../styles/home.scss";

export const Footer = () => (
	<footer className="footer mt-auto py-1 text-center">
		<div className="container">
			<h3 className="d-flex justify-content-center fontcolor">Acerca de Typeat</h3>
			<hr />
			<a className="d-flex justify-content-center" href="http://www.4geeksacademy.com">
				Acerca de Typeat
			</a>

			<a className="d-flex justify-content-center" href="http://www.4geeksacademy.com">
				Anúnciate con nosotros
			</a>

			<a className="d-flex justify-content-center" href="http://www.4geeksacademy.com">
				Unirse
			</a>
			<hr />
		</div>
		<p id="colorp">
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="http://www.4geeksacademy.com">
				Javi
				{" & "}
				Sara
			</a>
		</p>
	</footer>
);

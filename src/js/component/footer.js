import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-1 text-center">
		<div className="container">
			<h3>Acerca de Typeat</h3>
			<a href="http://www.4geeksacademy.com">Acerca de Typeat</a>

			<hr />
			<a href="http://www.4geeksacademy.com">Anúnciate con nosotros</a>
			<hr />
			<a href="http://www.4geeksacademy.com">Unirse</a>
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

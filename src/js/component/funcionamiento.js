import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/jumbotron.scss";
import searchIcon from "../../img/icons8-search-50.png";
import findIcon from "../../img/icons8-country-50.png";
import foodIcon from "../../img/icons8-omlette-64.png";

export const Funcionamiento = () => {
	return (
		<div className="container-fluid" id="jumbosizefun">
			<div className="jumbotron jumbfuncionamiento">
				<div className="card-deck">
					<div className="card rounded-circle" id="card_func">
						<img src={searchIcon} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Encuentra</h5>
							<p className="card-text">
								Encuentra los platos típicos de tus zonas favoritas usando nuestro buscador. Selecciona
								por zona, por plato típico o por ambos.
							</p>
						</div>
					</div>
					<div className="card rounded-circle" id="card_func">
						<img src={findIcon} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Elige</h5>
							<p className="card-text">
								Elige los platos típicos de la zona seleccionada en función de su valoración y
								distancia.
							</p>
						</div>
					</div>
					<div className="card rounded-circle" id="card_func">
						<img src={foodIcon} className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Y disfruta!</h5>
							<p className="card-text">
								Acércate a disfrutar tu plato típico favorito y comparte tu experiencia.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

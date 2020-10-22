import React, { Component } from "react";
import "../../styles/jumbotron.scss";
import searchIcon from "../../img/icons8-search-50.png";
import findIcon from "../../img/icons8-country-50.png";
import foodIcon from "../../img/icons8-omlette-64.png";

export const Funcionamiento = () => {
	return (
		<div className="container-fluid">
			<div className="jumbotron ">
				<div className="card-deck">
					<div className="col-sm-12 card rounded-circle">
						<img src={searchIcon} id="card_func_img" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Encuentra</h5>
							<p className="card-text">
								Encuentra los platos típicos de la ciudad que elijas usando nuestro buscador. Selecciona
								sólo por zona <br />o incluye el plato típico en tu búsqueda.
							</p>
						</div>
					</div>

					<div className="col-sm-12 card rounded-circle">
						<img src={findIcon} id="card_func_img" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Elige</h5>
							<p className="card-text">
								Elige los platos típicos que más te gusten y añádelos como favoritos en tu perfil.
							</p>
						</div>
					</div>
					<div className="col-sm-12 card rounded-circle">
						<img src={foodIcon} id="card_func_img" alt="..." />
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

import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/dishresult.scss";
import { Link, useParams } from "react-router-dom";
import RatingStar from "../component/ratingstar";

export const Dishresult = users => {
	const { store, actions } = useContext(Context);
	//const { theid } = useParams();
	//const chId = theid - 1;
	//console.log(users);
	useEffect(() => {
		actions.loadDishes();
	}, []);
	return (
		<div className="container fondocard shadow p-4 mb-4 bg-white">
			<div className="row">
				<div className="col">
					<h1 className="text-center margentitulo">
						<ins>RESTAURANTE PINK FLOYD: </ins>
					</h1>
					<div className="row">
						<img
							className="col-8 img-responsive"
							src="https://static4.abc.es/media/bienestar/2020/05/22/tortilla-patatas-k9tF--620x349@abc.jpeg"
							alt="Chania"
						/>
						<div className="col-4">
							<h3 className="text-center plato">Plato Vanguardista</h3>
							<RatingStar />

							<p>
								Menudo hambre me acaba de entrar cuando he visto esa jodida carne con su crujiente de
								vegetales.
							</p>

							<span type="button" id="fav" className=" btn btn-outline-warning fab fa-gratipay mt-auto" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

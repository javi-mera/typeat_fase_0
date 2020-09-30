import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/dishresult.scss";
import { Link, useParams } from "react-router-dom";
import RatingStar from "../component/ratingstar";

export const Dishresult = users => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	const chId = theid - 1;
	console.log(theid);
	debugger;
	return (
		<div className="container fondocard shadow p-4 mb-4 bg-white">
			<div className="row">
				<div className="col">
					<h1 className="text-center margentitulo">
						<ins>RESTAURANTE PINK FLOYD</ins>
					</h1>
					<div className="row">
						<img
							className="col-8 img-responsive"
							src="https://alianzza.es/wp-content/uploads/2015/03/dsc_6727.jpg"
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
					{console.log(store.users)}
					{console.log(store.demo[0].title)}
				</div>
			</div>
		</div>
	);
};

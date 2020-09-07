import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/dishresult.scss";
import { Link, useParams } from "react-router-dom";

export const Dishresult = users => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	const chId = theid - 1;
	console.log(theid);

	return (
		<div className="col-md-5 no-padding lib-item" data-category="ui">
			<div className="lib-panel">
				<div className="row box-shadow">
					<div className="col-md-6" />
					<div className="col-md-6">
						<div className="lib-row lib-header">
							Plato: {console.log(store.users[1])}
							<div className="lib-header-seperator" />
						</div>
						<div className="lib-row lib-desc">descripción: </div>
					</div>
				</div>
			</div>
		</div>
	);
};

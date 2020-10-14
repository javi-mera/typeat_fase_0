import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.scss";
//import "../../styles/jumbotron.scss";
import "../../styles/search.scss";
import { SecondaryInput } from "../component/secondaryinput";
import { Dish } from "../component/dish";
import { Context } from "../store/appContext";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import * as qs from "query-string";
import MapView from "../component/react-leaflet";
import { MarkerIcon } from "../component/react-leaflet-icon";

export const Search = () => {
	const { store, actions } = useContext(Context);
	const [indexTop, setIndexTop] = useState(4);
	const indexBottom = indexTop - 4;
	const location = useLocation();
	const parsed = qs.parse(location.search);
	//console.log(parsed, "parsed");
	useEffect(() => {
		actions.renderSearchInfo(location.search);
	}, []);
	if (store.dishes !== null) {
		return (
			<div className="base">
				<div className="jumbotron" id="jumbobackground">
					<SecondaryInput info={parsed} />
				</div>
				<div className="row">
					<div className="card col-6 base border">
						{store.dishes.map((e, index) => {
							if (index + 1 <= indexTop && index + 1 > indexBottom) {
								//console.log(e, index + "eso");
								return <Dish key={index} dishes={e} />;
							}
						})}

						<div className="card-footer">
							<div className="d-flex justify-content-between ">
								<Button
									href=""
									className="m-1 bg-dark"
									onClick={() => {
										setIndexTop(indexTop - 4);
									}}>
									Previous
								</Button>
								<Button
									href=""
									className="m-1 bg-dark"
									onClick={() => {
										setIndexTop(indexTop + 4);
									}}>
									Next
								</Button>
							</div>
						</div>
					</div>
					<div className="col-6">
						<MapView info={parsed} />
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="base">
				<div className="jumbotron" id="jumbobackground">
					<SecondaryInput info={parsed} />
				</div>
				<div className="row">
					<div className="card col-6 base border">
						<div className="card-footer">
							<div className="d-flex justify-content-between ">
								<Button
									href=""
									className=" m-1 bg-dark"
									onClick={() => {
										setIndexTop(indexTop - 4);
									}}>
									Previous
								</Button>
								<Button
									href=""
									className=" m-1 bg-dark"
									onClick={() => {
										setIndexTop(indexTop + 4);
									}}>
									Next
								</Button>
							</div>
						</div>
					</div>
					<div className="col-6">
						<MapView />
					</div>
				</div>
			</div>
		);
	}
};

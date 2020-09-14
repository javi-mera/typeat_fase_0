import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.scss";
import { MainForm } from "../component/mainform";
import { Dish } from "../component/dish";
import { Context } from "../store/appContext";
import { Button } from "react-bootstrap";
import calamares from "../../img/calamares.jpg";

export const Search = () => {
	const { store, actions } = useContext(Context);
	const [indexTop, setIndexTop] = useState(4);
	const indexBottom = indexTop - 4;
	return (
		<div>
			<div className="jumbotron alinearform">
				<MainForm />
			</div>
			<div className="row">
				<div className="card col-6">
					<div className="container cont_width dishcard">
						{store.dishes.map((e, index) => {
							if (index <= indexTop && index > indexBottom) {
								console.log(index);
								return <Dish key={index} dishes={e} />;
							}
						})}
					</div>
					<div className="card-footer">
						<div className="d-flex justify-content-between ">
							<Button
								href=""
								className="alignbutton m-1 bg-dark"
								onClick={() => {
									setIndexTop(indexTop - 5);
								}}>
								Previous
							</Button>
							<Button
								href=""
								className="alignbutton m-1 bg-dark"
								onClick={() => {
									setIndexTop(indexTop + 5);
								}}>
								Next
							</Button>
						</div>
					</div>
				</div>
				<div className="col-6">
					<img
						className="card-img-center"
						src="https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/480/public/media/image/2016/05/543113-asi-funciona-google-maps-conexion-internet.jpg?itok=zLmKOPKf"
						alt="Card image cap"
					/>
				</div>
			</div>
		</div>
	);
};

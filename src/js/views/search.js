import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.scss";
import { MainForm } from "../component/mainform";
import { Dishes } from "../component/dishes";
import { Context } from "../store/appContext";
import { Button } from "react-bootstrap";

export const Search = () => {
	const { store, actions } = useContext(Context);
	const [indexTop, setIndexTop] = useState(4);
	const indexBottom = indexTop - 4;
	return (
		<div>
			<div className="jumbotron alinearform">
				<MainForm />
			</div>
			<div className="container cont_width dishcard">
				{store.users.map((e, index) => {
					if (index <= indexTop && index > indexBottom) {
						console.log(index);
						return <Dishes key={index} users={e} />;
					}
				})}
			</div>
			<div className="contButt">
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
	);
};

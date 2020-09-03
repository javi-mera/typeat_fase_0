import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.scss";
import { MainForm } from "../component/mainform";
import { Dishes } from "../component/dishes";
import { Context } from "../store/appContext";

//import Maps from "../component/maps";

export const Search = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<MainForm />
			<div>
				{store.users.map((e, index) => {
					//console.log(e);
					return <Dishes key={index} users={e} />;
				})}
			</div>
		</div>
	);
};

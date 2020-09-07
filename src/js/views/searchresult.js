import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Button } from "react-bootstrap";
import { Dishresult } from "../component/dishresult";

export const Searchresult = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Dishresult />
		</div>
	);
};

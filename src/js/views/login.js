import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/registro.scss";
import "../../styles/home.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [inputimg, setinputimg] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	return (
		<div className="base">
			<form className="align-self-center">
				<div className="form-group">
					<label className="lettersize" htmlFor="exampleInputEmail1">
						Email
					</label>
					<input
						onChange={e => setEmail(e.target.value)}
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
				</div>
				<div className="form-group">
					<label className="lettersize" htmlFor="exampleInputPassword1">
						Contraseña
					</label>
					<input
						onChange={e => setPassword(e.target.value)}
						type="password"
						className="form-control"
						id="exampleInputPassword1"
					/>
				</div>

				<div className="text-center">
					<br />
					<Link to="/">
						<button
							onClick={e => {
								actions.login(email, password);
							}}
							className="btn btn-primary lettersize">
							Iniciar sesión
						</button>
					</Link>
				</div>
				<div className="signNowButton text-center">
					<Link to="/signup">
						<label id="other" htmlFor="exampleCheck1" className="lettersize">
							¿Todavía no tienes cuenta?
						</label>
					</Link>
				</div>
			</form>
		</div>
	);
};

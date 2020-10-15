import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/registro.scss";
import "../../styles/home.scss";

export const SignUp = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [password2, setPassword2] = useState(null);
	return (
		<div className="base">
			<form className="align-self-center ">
				<div className="form-group">
					<label className="lettersize" htmlFor="exampleInputEmail1">
						Email
					</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label className="lettersize" htmlFor="exampleInputPassword1">
						Contraseña
					</label>
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						onChange={e => setPassword(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label className="lettersize" htmlFor="exampleInputPassword1">
						Confirma tu contraseña
					</label>
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						onChange={e => setPassword2(e.target.value)}
					/>
				</div>
				<div className="text-center">
					<button
						type="submit"
						className="btn btn-primary lettersize"
						onClick={e => {
							if (password !== password2) {
								alert("Nope! tus dos campos de contraseña no coinciden!");
							} else {
								actions.register(email, password);
								alert("Fichado!");
							}
						}}>
						Regístrate
					</button>
				</div>
				<div className="signNowButton text-center">
					<Link to="/login">
						<label id="other" htmlFor="exampleCheck1" className="lettersize">
							¿Ya tienes cuenta? Accede!
						</label>
					</Link>
				</div>
			</form>
		</div>
	);
};

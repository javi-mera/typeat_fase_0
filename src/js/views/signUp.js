import React from "react";
import { Link } from "react-router-dom";
import "../../styles/registro.scss";
import "../../styles/home.scss";

export const SignUp = () => {
	return (
		<div className="base">
			<form className="align-self-center ">
				<div className="form-group">
					<label className="lettersize" htmlFor="exampleInputEmail1">
						Email
					</label>
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
				</div>
				<div className="form-group">
					<label className="lettersize" htmlFor="exampleInputPassword1">
						Contraseña
					</label>
					<input type="password" className="form-control" id="exampleInputPassword1" />
				</div>
				<div className="form-group">
					<label className="lettersize" htmlFor="exampleInputPassword1">
						Confirma tu contraseña
					</label>
					<input type="password" className="form-control" id="exampleInputPassword1" />
				</div>
				<div className="text-center">
					<button type="submit" className="btn btn-primary lettersize">
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

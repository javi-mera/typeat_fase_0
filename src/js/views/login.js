import React from "react";
import { Link } from "react-router-dom";
import "../../styles/registro.scss";

export const Login = () => {
	return (
		<form className="align-self-center">
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
			<div className="text-right">
				<Link to="/">
					<label className="forgot" htmlFor="exampleCheck1">
						¿No recuerdas tu contraseña?
					</label>
				</Link>
			</div>
			<div className="text-center">
				<button type="submit" className="btn btn-primary lettersize">
					Iniciar sesión
				</button>
			</div>
			<div className="signNowButton text-center">
				<Link to="/signup">
					<label id="other" htmlFor="exampleCheck1" className="lettersize">
						¿Todavía no tienes cuenta?
					</label>
				</Link>
			</div>
		</form>
	);
};

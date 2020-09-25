import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/registro.scss";
import "../../styles/home.scss";

export const Login = () => {
	const [inputimg, setinputimg] = useState(null);
	return (
		<div className="base">
			<form>
				<input type="file" onChange={e => setinputimg(e.target.value)} />
				<button
					type="submit"
					onClick={e => {
						e.preventDefault();
						console.log(inputimg);
					}}>
					Subir
				</button>

				<form method="get" action={inputimg}>
					<button type="submit">Download!</button>
				</form>
			</form>
			<form className="align-self-center">
				<div className="form-group">
					<label className="lettersize" htmlFor="exampleInputEmail1">
						Email
					</label>
			
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
        </div>
	);
};

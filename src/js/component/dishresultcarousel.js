import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/dishresult.scss";
import { Link, useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

export const Dishresultcarousel = users => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	return (
		<Carousel>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://www.xtrafondos.com/wallpapers/tierra-imaginaria-828.jpg"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://www.xtrafondos.com/wallpapers/atardecer-en-la-playa-554.jpg"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://www.xtrafondos.com/wallpapers/pico-de-la-montana-en-suiza-388.jpg"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>

		/*<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						className="d-block w-100"
						src="https://www.xtrafondos.com/wallpapers/tierra-imaginaria-828.jpg"
						alt="First slide"
					/>
				</div>
				<div className="carousel-item">
					<img
						className="d-block w-100"
						src="https://www.xtrafondos.com/wallpapers/atardecer-en-la-playa-554.jpg"
						alt="Second slide"
					/>
				</div>
				<div className="carousel-item">
					<img
						className="d-block w-100"
						src="https://www.xtrafondos.com/wallpapers/pico-de-la-montana-en-suiza-388.jpg"
						alt="Second slide"
					/>
				</div>
			</div>
			<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true" />
				<span className="sr-only">Previous</span>
			</a>
			<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="sr-only">Next</span>
			</a>
		</div>*/
	);
};

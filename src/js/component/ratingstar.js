import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../../styles/ratingtar.scss";

const RatingStar = () => {
	const [rating, setRating] = useState(null);

	return (
		<div>
			<label>
				<FaStar className="star" size={20} />
				<FaStar className="star" size={20} />
				<FaStar className="star" size={20} />
				<FaStar className="star" size={20} />
				<FaStar className="star" size={20} />
			</label>
		</div>
	);
};

export default RatingStar;

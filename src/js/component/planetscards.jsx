import React, { useContext } from "react";

import { Context } from "../store/appContext.js";

import { Link } from "react-router-dom";

export const MyCardPlanetsCreator = () => {
	const { store, actions } = useContext(Context);
	const cards = store.planets.map((planet, index) => (
		<div className="card card-styling-class" key={index}>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/4/46/Trantor-Coruscant.jpg"
				className="card-img-top"
				alt="planets img"
			/>
			<div className="card-body d-flex flex-column">
				<h5 className="card-title">{planet.name}</h5>
				<div className="Buttons-container">
					<Link to={"/planets/" + planet.name}>
						<button href="#" className="btn btn-outline-light">
							More info
						</button>
					</Link>

					<button onClick={() => actions.addTofavorites(planet.name)} className="btn btn-outline-danger">
						<i className="far fa-heart" />
					</button>
				</div>
			</div>
		</div>
	));
	return cards;
};

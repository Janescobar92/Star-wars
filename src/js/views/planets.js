import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const locateIndex = () => {
		let result = "";
		for (let i = 0; i < store.planets.length; i++) {
			if (store.planets[i].name == params.theid) {
				result = store.planets[i];
			}
		}
		return result;
	};
	return (
		<div>
			<div className="jumbotron" />
			<div>
				<div className="bg-text">
					<h1 className="display-4">{params.theid}</h1>
					<div className="d-flex justify-content-between pt-5 info-conatin">
						<p>Terrain type : {locateIndex().terrain}</p>

						<p>Climate : {locateIndex().climate}</p>

						<p>Diameter : {locateIndex().diameter}</p>

						<p>Population : {locateIndex().population}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

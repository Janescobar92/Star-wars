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

					<p>Terrain type : {locateIndex().terrain}</p>
				</div>
			</div>
		</div>
	);
};

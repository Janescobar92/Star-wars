import React, { useContext } from "react";
// import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const locateIndex = () => {
		let result = "";
		for (let i = 0; i < store.characters.length; i++) {
			if (store.characters[i].name == params.theid) {
				result = store.characters[i];
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
						<p>Gender : {locateIndex().gender}</p>

						<p>Hair color : {locateIndex().hair_color}</p>

						<p>height : {locateIndex().height + " cm"}</p>

						<p>Skin color : {locateIndex().skin_color}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

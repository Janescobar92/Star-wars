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

					<p>Name : {locateIndex().name}</p>
				</div>
			</div>
		</div>
	);
};

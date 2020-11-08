import React from "react";

import { MyCardPlanetsCreator } from "./planetscards.jsx";

import { MyCardCharacterCreator } from "./characters.jsx";

import demo from "../../styles/demo.scss";

export const CardsContainer = () => {
	return (
		<div className="container">
			<div className="cards-container-styling my-3">
				<MyCardPlanetsCreator />
			</div>
			<div className="cards-container-styling my-3">
				<MyCardCharacterCreator />
			</div>
		</div>
	);
};

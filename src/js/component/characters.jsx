import React, { useContext } from "react";

import { Context } from "../store/appContext.js";

import { Link } from "react-router-dom";

export const MyCardCharacterCreator = () => {
	const { store, actions } = useContext(Context);
	const cards = store.characters.map((character, index) => (
		<div className="card card-styling-class" key={index}>
			<img
				src="https://hipertextual.com/files/2019/08/hipertextual-asi-era-diseno-original-kylo-ren-star-wars-despertar-fuerza-2019807231.jpg"
				className="card-img-top"
				alt="planets img"
			/>
			<div className="card-body d-flex flex-column">
				<h5 className="card-title">{character.name}</h5>
				<div className="Buttons-container">
					<Link to={"/characters/" + character.name}>
						<button href="#" className="btn btn-outline-light">
							More info
						</button>
					</Link>

					<button onClick={() => actions.addTofavorites(character.name)} className="btn btn-outline-danger">
						<i className="far fa-heart" />
					</button>
				</div>
			</div>
		</div>
	));
	return cards;
};

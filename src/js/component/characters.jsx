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
				<p className="card-text mb-0">{character.gender}</p>
				<p className="card-text my-0">{character.hair_color}</p>
				<p className="card-text my-0">{character.height}</p>
				<p className="card-text my-0">{character.skin_color}</p>
				<Link to={"/characters/" + character.name}>
					<button href="#" className="btn btn-outline-success m-auto">
						More info
					</button>
				</Link>

				<button
					onClick={() => actions.addTofavorites(character.name)}
					className="btn btn-outline-danger m-auto">
					<i className="far fa-heart" />
				</button>
			</div>
		</div>
	));
	return cards;
};

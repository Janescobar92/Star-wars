const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			characters: [],
			favorites: []
		},
		actions: {
			planetsInfoGatherer: URL => {
				fetch(URL)
					.then(response => {
						if (!response.ok) {
							throw Error(response.status);
						}
						return response.json();
					})
					.then(responseAsJson => {
						let planetsContent = responseAsJson.results;
						getActions().setPlanets(planetsContent);

						if (responseAsJson.next) {
							getActions().planetsInfoGatherer(responseAsJson.next.replace(":", "s:"));
						}
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},
			setPlanets: planetsList => {
				let formatPlantes = [];
				planetsList.map(planet => {
					let formatEachPlanet = {
						name: planet.name,
						climate: planet.climate,
						terrain: planet.terrain,
						diameter: planet.diameter,
						population: planet.population
					};
					formatPlantes.push(formatEachPlanet);
				});
				setStore({ planets: [...getStore().planets, formatPlantes].flat() });
			},
			charactersInfoGatherer: URL => {
				fetch(URL)
					.then(response => {
						if (!response.ok) {
							throw Error(response.status);
						}
						return response.json();
					})
					.then(responseAsJson => {
						let CharactersContent = responseAsJson.results;
						getActions().setCharacters(CharactersContent);
						if (responseAsJson.next) {
							getActions().charactersInfoGatherer(responseAsJson.next.replace(":", "s:"));
						}
					})
					.catch(error => {
						console.log("Error status: ", error);
					});
			},
			setCharacters: charactersList => {
				let formatCharacters = [];
				charactersList.map(character => {
					let formatEachCharacter = {
						name: character.name,
						gender: character.gender,
						hair_color: character.hair_color,
						height: character.height,
						skin_color: character.skin_color
					};
					formatCharacters.push(formatEachCharacter);
				});
				setStore({ characters: [...getStore().characters, formatCharacters].flat() });
			},
			addTofavorites: param => {
				if (!getStore().favorites.includes(param)) {
					setStore({ favorites: [...getStore().favorites, param].flat() });
				}
			},
			delete: arr => {
				getStore().favorites.splice(arr, 1);
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

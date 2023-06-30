const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			characters: [],
			charactersDetail: [],
			planets: [],
			planetsDetail: [],
			films: [],
			filmsDetail: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadCharactersData: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people/");
					const data = await response.json();
					setStore({ characters: data.results })
					console.log(data.results)

					try {
						const store = getStore();
						const uidArray = store.characters.map((element) => element.uid)
						console.log(uidArray);
						const promises = uidArray.map((uid) => fetch(`https://www.swapi.tech/api/people/${uid}`))
						const responses = await Promise.all(promises);
						const data = await Promise.all(responses.map((response) => response.json()));

						const newCharactersDetail = [...store.charactersDetail, ...data.map((item) => ({...item.result, type: "character"}))];

						setStore({ charactersDetail: newCharactersDetail });
						console.log([store.charactersDetail, "jajajajajaja"]);
					} catch (error) {
						console.log(error);
					}
				}
				catch (error) {
					console.log(error);

				};
			},
			loadPlanetsData: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets/");
					const data = await response.json();
					setStore({ planets: data.results })
					console.log(data.results)

					try {
						const store = getStore();
						const uidArray = store.planets.map((element) => element.uid)
						console.log(uidArray);
						const promises = uidArray.map((uid) => fetch(`https://www.swapi.tech/api/planets/${uid}`))
						const responses = await Promise.all(promises);
						const data = await Promise.all(responses.map((response) => response.json()));

						const newPlanetsDetail = [...store.planetsDetail, ...data.map((item) => ({...item.result, type: "planet"}))];

						setStore({ planetsDetail: newPlanetsDetail });
						console.log(store.planetsDetail);
					} catch (error) {
						console.log(error);
					}
				}
				catch (error) {
					console.log(error);

				};
			},
			loadFilmsData: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/films/");
					const data = await response.json();
					setStore({ films: data.result })
					console.log(data.result)

					try {
						const store = getStore();
						const uidArray = store.films.map((element) => element.uid)
						console.log(uidArray);
						const promises = uidArray.map((uid) => fetch(`https://www.swapi.tech/api/films/${uid}`))
						const responses = await Promise.all(promises);
						const data = await Promise.all(responses.map((response) => response.json()));

						const newFilmsDetail = [...store.filmsDetail, ...data.map((item) => ({...item.result, type: "film"}))];

						setStore({ filmsDetail: newFilmsDetail });
						console.log(store.filmsDetail);
					} catch (error) {
						console.log(error);
					}
				}
				catch (error) {
					console.log(error);

				};
			},
		}
	};
};

export default getState;

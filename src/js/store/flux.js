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
			loadCharactersData: async () => {
				const { actions } = getActions();

				try {
					const response = await fetch("https://www.swapi.tech/api/people/");
					const data = await response.json();
					setStore({ characters: data.results })

					try {
						const store = getStore();
						const uidArray = store.characters.map((element) => element.uid)
						const promises = uidArray.map((uid) => fetch(`https://www.swapi.tech/api/people/${uid}`))
						const responses = await Promise.all(promises);
						const data = await Promise.all(responses.map((response) => response.json()));

						const newCharactersDetail = [...store.charactersDetail, ...data.map((item) => ({ ...item.result, type: "character" }))];

						setStore({ charactersDetail: newCharactersDetail });
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

					try {
						const store = getStore();
						const uidArray = store.planets.map((element) => element.uid)
						const promises = uidArray.map((uid) => fetch(`https://www.swapi.tech/api/planets/${uid}`))
						const responses = await Promise.all(promises);
						const data = await Promise.all(responses.map((response) => response.json()));

						const newPlanetsDetail = [...store.planetsDetail, ...data.map((item) => ({ ...item.result, type: "planet" }))];

						setStore({ planetsDetail: newPlanetsDetail });
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

					try {
						const store = getStore();
						const uidArray = store.films.map((element) => element.uid)
						const promises = uidArray.map((uid) => fetch(`https://www.swapi.tech/api/films/${uid}`))
						const responses = await Promise.all(promises);
						const data = await Promise.all(responses.map((response) => response.json()));

						const newFilmsDetail = [...store.filmsDetail, ...data.map((item) => ({ ...item.result, type: "film" }))];

						setStore({ filmsDetail: newFilmsDetail });
					} catch (error) {
						console.log(error);
					}
				}
				catch (error) {
					console.log(error);

				};
			},
			saveDataToLocalStorage: (key, data) => {
				localStorage.setItem(key, JSON.stringify(data));
			},
			loadDataFromLocalStorage: (key) => {
				const store = getStore();
				const data = localStorage.getItem(key);
				const parsedData = JSON.parse(data);
			  
				if (parsedData) {
				  setStore({ favorites: parsedData });
				}
			  
				return parsedData;
			  },

			updateFavorites: (newFavorites) => {
				const store = getStore();
				const updatedFavorites =  newFavorites;

				getActions().saveDataToLocalStorage("favorites", newFavorites);
				setStore({ favorites: updatedFavorites })
			}

		}
	};
};

export default getState;

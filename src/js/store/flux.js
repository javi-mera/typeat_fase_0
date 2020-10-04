import { encode } from "base-64";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [],
			dishes: [],
			formInfo: [],
			city: [],
			token: ""
		},
		actions: {
			loadContacts: async () => {
				let users_charge = [];
				let url = "https://jsonplaceholder.typicode.com/posts";
				let response = await fetch(url);
				let respJson = await response.json();
				//console.log(respJson);
				users_charge = respJson;
				//console.log(users_charge);
				setStore({ users: users_charge });
			},

			loadCities: async () => {
				let cities = [];
				let url = "https://3000-c3a402e5-126b-4571-8cd1-6a6fe7c9508e.ws-eu01.gitpod.io/city";
				let response = await fetch(url);
				let respJson = await response.json();
				cities = respJson;
				setStore({ city: cities });
			},

			//Modificar: usar Dishes para f(x) renderSearch
			loadDishes: async () => {
				let dishes_charge = [];
				let url = "https://3000-c3a402e5-126b-4571-8cd1-6a6fe7c9508e.ws-eu01.gitpod.io/dish";
				let response = await fetch(url);
				let respJson = await response.json();
				//console.log(respJson);
				dishes_charge = respJson;
				//console.log(users_charge);
				setStore({ dishes: dishes_charge });
			},

			loadSearchInfo: async params => {
				//console.log(params);
				let url = "https://3000-c3a402e5-126b-4571-8cd1-6a6fe7c9508e.ws-eu01.gitpod.io/search" + params;
				let response = await fetch(url);
			},

			renderSearchInfo: async params => {
				console.log(params);
				let dishes_charge = [];
				let url = "https://3000-c3a402e5-126b-4571-8cd1-6a6fe7c9508e.ws-eu01.gitpod.io/render_results" + params;
				let response = await fetch(url);
				console.log(response);
				let respJson = await response.json();
				console.log(respJson);
				dishes_charge = respJson.info;
				setStore({ dishesName: dishes_charge });
			},

			duplicateDishes: async params => {
				let dishes_charge = [];
				let url = "https://3000-c3a402e5-126b-4571-8cd1-6a6fe7c9508e.ws-eu01.gitpod.io/render_results" + params;
				let response = await fetch(url);
				let respJson = await response.json();
				dishes_charge = respJson.info;
				setStore({ dishes: dishes_charge });
				const data = await getStore();

				function removeDuplicates(originalArray, prop) {
					let newArray = [];
					let lookupObject = {};
					for (let i in originalArray) {
						lookupObject[originalArray[i][prop]] = originalArray[i];
					}
					for (i in lookupObject) {
						newArray.push(lookupObject[i]);
					}
					return newArray;
				}

				let uniqueArray = removeDuplicates(data.dishes, "name");

				//let filterDishes = data.dishes.filter((dish, index) => data.dishes.name.indexOf(dish) === index);
				console.log(uniqueArray);
				setStore({ dishes: uniqueArray });
			},

			inputForm: item => {
				const data = getStore();
				return setStore({ formInfo: item });
			},
			// Use getActions to call a function within a fuction

			login: async (email, password) => {
				debugger;
				let response = await fetch(
					"https://3000-c3a402e5-126b-4571-8cd1-6a6fe7c9508e.ws-eu01.gitpod.io/login",
					{
						method: "POST",
						headers: {
							Authorization: "Basic " + encode(email + ":" + password)
						}
					}
				);
				let respJson = await response.json();
				console.log(respJson);
				setStore({ token: respJson.token });
			}
		}
	};
};

export default getState;

import { encode } from "base-64";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [],
			dishes: [],
			formInfo: [],
			cityInfo: [],
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

			loadDishes: async () => {
				let dishes_charge = [];
				let url = "https://3000-f2432604-1936-4aa6-bdba-9d7bf3ac6cfe.ws-eu01.gitpod.io/dish";
				let response = await fetch(url);
				let respJson = await response.json();
				//console.log(respJson);
				dishes_charge = respJson;
				//console.log(users_charge);
				setStore({ dishes: dishes_charge });
			},

			loadSearchInfo: async params => {
				console.log(params);
				let city_Info = [];
				let url = "https://3000-c3a402e5-126b-4571-8cd1-6a6fe7c9508e.ws-eu01.gitpod.io/search" + params;
				let response = await fetch(url);
				let respJson = await response.json();
				//console.log(respJson);
				city_Info = respJson;
				//console.log(users_charge);
				setStore({ cityInfo: city_Info });
			},

			inputForm: item => {
				const data = getStore();
				return setStore({ formInfo: item });
			},
			// Use getActions to call a function within a fuction

			login: async (email, password) => {
				let response = await fetch(
					"https://3000-f2432604-1936-4aa6-bdba-9d7bf3ac6cfe.ws-eu01.gitpod.io/login",
					{
						method: "POST",
						headers: { Authorization: "Basic " + require("base-64").encode(email + ":" + password) }
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

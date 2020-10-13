import { encode } from "base-64";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [],
			dishes: [],
			restaurants: [],
			formInfo: [],
			city: [],
			favorites: [],
			coordenadas: [],
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
				let url = "https://3000-c3356348-db7b-4863-a61f-9b88ccdbbac8.ws-eu01.gitpod.io/city";
				let response = await fetch(url);
				let respJson = await response.json();
				cities = respJson;
				setStore({ city: cities });
			},
			loadRestaurants: async () => {
				let url = "https://3000-c3356348-db7b-4863-a61f-9b88ccdbbac8.ws-eu01.gitpod.io/restaurant";
				let response = await fetch(url);
				let respJson = await response.json();
				let rest = respJson;
				//console.log(rest, "aqui");
				setStore({ restaurants: rest });
			},
			loadRestaurantAdd: r_a_id => {
				const data = getStore();
				//let filter = data.restaurants.id.find(rest_id);
				let filter_rest = data.restaurants.filter(restaurant => restaurant.id == r_a_id);
				//console.log(filter_rest[0].name);
				return filter_rest[0].address;
			},

			loadRestaurantName: r_n_id => {
				const data = getStore();
				let filter_rest = data.restaurants.filter(restaurant => restaurant.id == r_n_id);
				return filter_rest[0].name;
			},

			loadRestaurantPhn: r_p_id => {
				const data = getStore();
				let filter_rest = data.restaurants.filter(restaurant => restaurant.id == r_p_id);
				return filter_rest[0].phone;
			},

			getDish: d_id => {
				const data = getStore();
				let filter_dishes = data.dishes.filter(dish => dish.id == d_id);
				return filter_dishes;
			},
			getDishesOfRest: d_r => {
				const data = getStore();
				let filter_dishes = data.dishes.filter(dish => dish.restaurant_id == d_r);
				return filter_dishes;
			},
			addFavorites: (name, button) => {
				const store = getStore();
				const exist = store.favorites.filter(fav => fav === name);
				if (exist.length === 0) {
					button.classList.add("active");
					return setStore({ favorites: [...store.favorites, name] });
				} else {
					const exist = store.favorites.filter(item => item != name);
					button.classList.remove("active");
					return setStore({ favorites: exist });
				}
			},
			mapMarkers: param => {
				let data = getStore();
				let city = data.city.filter(city => city.name.toUpperCase() == param.lugar.toUpperCase());
				let city_id = city[0].id;
				//console.log(city_id);
				if (param.plato == "") {
					let filter_restaurant = data.restaurants.filter(restaurant => restaurant.city_id == city_id);
					let cities_latLong = [];
					filter_restaurant.forEach(rest => {
						let coord = { lat: rest.latitude, lng: rest.longitude };
						cities_latLong.push(coord);
					});
					setStore({ coordenadas: cities_latLong });
				} else if (param.plato != "") {
					let filter_dishes = [];
					data.dishes.forEach(dish => {
						if (dish.name.toUpperCase() == param.plato.toUpperCase()) {
							filter_dishes.push(dish);
						}
					});
					console.log(filter_dishes);
					let filter_rest = [];
					filter_dishes.forEach(dish => {
						let rest_id = dish.restaurant_id;
						console.log(rest_id);
						let filter_restaurant = data.restaurants.filter(restaurant => restaurant.id == rest_id);
						filter_rest.push(filter_restaurant);
					});
					console.log(filter_rest);
					let cities_latLong = [];
					filter_rest.forEach(rest => {
						console.log(rest);
						let coord = { lat: rest[0].latitude, lng: rest[0].longitude };
						cities_latLong.push(coord);
					});
					setStore({ coordenadas: cities_latLong });
					console.log(cities_latLong);
				}
			},
			//Modificar: usar Dishes para f(x) renderSearch
			loadDishes: async () => {
				let dishes_charge = [];
				let url = "https://3000-c3356348-db7b-4863-a61f-9b88ccdbbac8.ws-eu01.gitpod.io/dish";
				let response = await fetch(url);
				let respJson = await response.json();
				//console.log(respJson);
				dishes_charge = respJson;
				//console.log(users_charge);
				setStore({ dishes: dishes_charge });
			},
			loadSearchInfo: async params => {
				//console.log(params);
				let url = "https://3000-c3356348-db7b-4863-a61f-9b88ccdbbac8.ws-eu01.gitpod.io/search" + params;
				let response = await fetch(url);
			},
			renderSearchInfo: async params => {
				//console.log(params);
				let dishes_charge = [];
				let url = "https://3000-c3356348-db7b-4863-a61f-9b88ccdbbac8.ws-eu01.gitpod.io/render_results" + params;
				let response = await fetch(url);
				//console.log(response);
				let respJson = await response.json();
				//console.log(respJson, "####");
				dishes_charge = respJson.info;
				debugger;
				setStore({ dishes: dishes_charge });
			},
			duplicateDishes: async params => {
				let dishes_charge = [];
				let url = "https://3000-c3356348-db7b-4863-a61f-9b88ccdbbac8.ws-eu01.gitpod.io/render_results" + params;
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
					for (let i in lookupObject) {
						newArray.push(lookupObject[i]);
					}
					return newArray;
				}
				let uniqueArray = removeDuplicates(data.dishes, "name");
				//let filterDishes = data.dishes.filter((dish, index) => data.dishes.name.indexOf(dish) === index);
				//console.log(uniqueArray);
				setStore({ dishes: uniqueArray });
			},
			inputForm: item => {
				const data = getStore();
				return setStore({ formInfo: item });
			},
			// Use getActions to call a function within a fuction
			login: async (email, password) => {
				let base = require("base-64");
				let response = await fetch(
					"https://3000-c3356348-db7b-4863-a61f-9b88ccdbbac8.ws-eu01.gitpod.io/login",
					{
						method: "POST",
						headers: {
							Authorization: "Basic " + base.encode(email + ":" + password)
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

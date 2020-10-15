import { encode } from "base-64";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [],
			dishes: [],
			restaurants: [],
			formInfo: [],
			city: [],
			coor: [],
			favorites: [],
			token: "",
			log: []
		},
		actions: {
			loadUsers: async () => {
				let users_charge = [];
				let url = "https://3000-c3a402e5-126b-4571-8cd1-6a6fe7c9508e.ws-eu01.gitpod.io/user";
				let response = await fetch(url);
				let respJson = await response.json();
				users_charge = respJson;
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
			loadRestaurants: async () => {
				let url = "https://3000-c3a402e5-126b-4571-8cd1-6a6fe7c9508e.ws-eu01.gitpod.io/restaurant";
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
			addFavorites: (dish, button) => {
				const store = getStore();
				console.log(store, "fav");
				const exist = store.favorites.filter(fav => fav.name === dish.name);
				if (exist.length === 0) {
					button.classList.add("active");
					return setStore({ favorites: [...store.favorites, dish] });
				} else {
					const exist = store.favorites.filter(item => item.name != dish.name);
					button.classList.remove("active");
					return setStore({ favorites: exist });
				}
			},
			favDishes: () => {
				const store = getStore();
				let favDishes = [];
				store.dishes.forEach(dish => {
					store.favorites.forEach(fav => {
						if (fav.name == dish.name) {
							favDishes.push(dish);
						}
					});
				});
				setStore({ dishes: favDishes });
			},

			mapMarkers: param => {
				let data = getStore();
				let city = data.city.filter(city => city.name.toUpperCase() == param.lugar.toUpperCase());
				let city_id = city[0].id;
				//console.log(city_id, "ciudad");
				if (param.plato == "") {
					let filter_restaurant = data.restaurants.filter(restaurant => restaurant.city_id == city_id);
					let cities_latLong = [];
					filter_restaurant.forEach(rest => {
						cities_latLong.push({ name: rest.name, coord: { lat: rest.latitude, lng: rest.longitude } });
					});
					console.log(cities_latLong[0]);
					setStore({ coor: cities_latLong });
					console.log(data.coor, "ciudad");
				} else if (param.plato != "") {
					let filter_dishes = [];
					data.dishes.forEach(dish => {
						if (dish.name.toUpperCase() == param.plato.toUpperCase()) {
							filter_dishes.push(dish);
						}
					});
					//console.log(filter_dishes);
					let filter_rest = [];
					filter_dishes.forEach(dish => {
						let rest_id = dish.restaurant_id;
						//console.log(rest_id);
						let filter_restaurant = data.restaurants.filter(restaurant => restaurant.id == rest_id);
						filter_rest.push(filter_restaurant);
					});
					//console.log(filter_rest);
					let cities_latLong = [];
					filter_rest.forEach(rest => {
						//console.log(rest[0].name, "nombre del rest");
						let coord = { lat: rest[0].latitude, lng: rest[0].longitude };
						cities_latLong.push({ name: rest[0].name, coord: coord });
					});
					setStore({ coor: cities_latLong });
					console.log(data.coor, "ciudad y plato");
				}
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
				//console.log(params);
				let dishes_charge = [];
				let url = "https://3000-c3a402e5-126b-4571-8cd1-6a6fe7c9508e.ws-eu01.gitpod.io/render_results" + params;
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
			logoutfunction: e => {
				console.log(e);
				setStore({ token: "" });
			},
			// Use getActions to call a function within a fuction

			register: async (email, password) => {
				console.log(email);
				const urlLogin = "https://3000-c3a402e5-126b-4571-8cd1-6a6fe7c9508e.ws-eu01.gitpod.io/register";
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: JSON.stringify({
						email: email,
						password: password
					}),
					redirect: "follow"
				};
				try {
					let res = await fetch(urlLogin, requestOptions);
					console.log(res);
					let result = await res.text();
					console.log("User Registered", result);
					//getActions().login(email, password);
				} catch (error) {
					console.log("error", error);
				}
			},

			login: async (email, password) => {
				let base = require("base-64");
				let response = await fetch(
					"https://3000-c3a402e5-126b-4571-8cd1-6a6fe7c9508e.ws-eu01.gitpod.io/login",
					{
						method: "POST",
						headers: {
							Authorization: "Basic " + base.encode(email + ":" + password)
						}
					}
				);
				setStore({ log: email });
				let respJson = await response.json();
				console.log(respJson);
				setStore({ token: respJson.token });
			}
		}
	};
};
export default getState;

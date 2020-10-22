const getState = ({ getStore, getActions, setStore }) => {
	let BACKEND_URL = process.env.BACKEND_URL;
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
				let url = BACKEND_URL + "/user";
				let response = await fetch(url);
				let respJson = await response.json();
				users_charge = respJson;
				setStore({ users: users_charge });
			},

			loadCities: async () => {
				let cities = [];
				let url = BACKEND_URL + "/city";
				let response = await fetch(url);
				let respJson = await response.json();
				cities = respJson;
				setStore({ city: cities });
			},
			loadRestaurants: async () => {
				let url = BACKEND_URL + "/restaurant";
				let response = await fetch(url);
				let respJson = await response.json();
				let rest = respJson;
				setStore({ restaurants: rest });
			},
			loadRestaurantAdd: r_a_id => {
				const data = getStore();
				let filter_rest = data.restaurants.filter(restaurant => restaurant.id == r_a_id);
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
				const exist = store.favorites.filter(fav => fav.id === dish.id);
				if (exist.length === 0) {
					button.classList.add("active");
					setStore({ favorites: [...store.favorites, dish] });
				} else {
					const exist = store.favorites.filter(item => item.id != dish.id);
					button.classList.remove("active");
					setStore({ favorites: exist });
				}
			},
			favDishes: () => {
				const store = getStore();
				let favDishes = [];
				store.dishes.forEach(dish => {
					store.favorites.forEach(fav => {
						if (fav.id == dish.id) {
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
				if (param.plato == "") {
					let filter_restaurant = data.restaurants.filter(restaurant => restaurant.city_id == city_id);
					let cities_latLong = [];
					filter_restaurant.forEach(rest => {
						cities_latLong.push({ name: rest.name, coord: { lat: rest.latitude, lng: rest.longitude } });
					});
					setStore({ coor: cities_latLong });
				} else if (param.plato != "") {
					let filter_dishes = [];
					data.dishes.forEach(dish => {
						if (dish.name.toUpperCase() == param.plato.toUpperCase()) {
							filter_dishes.push(dish);
						}
					});
					let filter_rest = [];
					filter_dishes.forEach(dish => {
						let rest_id = dish.restaurant_id;
						let filter_restaurant = data.restaurants.filter(restaurant => restaurant.id == rest_id);
						filter_rest.push(filter_restaurant);
					});
					let cities_latLong = [];
					filter_rest.forEach(rest => {
						let coord = { lat: rest[0].latitude, lng: rest[0].longitude };
						cities_latLong.push({ name: rest[0].name, coord: coord });
					});
					setStore({ coor: cities_latLong });
				}
			},
			loadDishes: async () => {
				let dishes_charge = [];
				let url = BACKEND_URL + "/dish";
				let response = await fetch(url);
				let respJson = await response.json();
				dishes_charge = respJson;
				setStore({ dishes: dishes_charge });
			},
			loadSearchInfo: async params => {
				let url = BACKEND_URL + "/search" + params;
				let response = await fetch(url);
			},
			renderSearchInfo: async params => {
				let dishes_charge = [];
				let url = BACKEND_URL + "/render_results" + params;
				let response = await fetch(url);
				let respJson = await response.json();
				dishes_charge = respJson.info;
				setStore({ dishes: dishes_charge });
			},
			duplicateDishes: async params => {
				let dishes_charge = [];
				let url = BACKEND_URL + "/render_results" + params;
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
				setStore({ dishes: uniqueArray });
			},
			inputForm: item => {
				const data = getStore();
				return setStore({ formInfo: item });
			},
			logoutfunction: e => {
				setStore({ token: "" });
			},

			register: async (email, password) => {
				const urlLogin = BACKEND_URL + "/register";
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
					let result = await res.text();
				} catch (error) {}
			},

			login: async (email, password) => {
				let base = require("base-64");
				let response = await fetch(BACKEND_URL + "/login", {
					method: "POST",
					headers: {
						Authorization: "Basic " + base.encode(email + ":" + password)
					}
				});
				setStore({ log: email });
				let respJson = await response.json();
				setStore({ token: respJson.token });
			}
		}
	};
};
export default getState;

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [],
			dishes: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
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

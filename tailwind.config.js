/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			backgroundImage: {
				deathStar: "url('./assets/imgs/death-star-background.jpg')",
				starField: "url('./assets/imgs/star-field.png')",
				films: "url('./assets/imgs/films.png')",
				people: "url('./assets/imgs/people.png')",
				planets: "url('./assets/imgs/planets.png')",
				species: "url('./assets/imgs/species.png')",
				starships: "url('./assets/imgs/starships.png')",
				vehicles: "url('./assets/imgs/vehicles.png')",
			},
			colors:{
				transparent: {
					black: "#000000ad",
					yellow:"#eab308bd"
				}
			},
			borderWidth: {
				1: "1px"
			}
		},
	},
	plugins: [],
};

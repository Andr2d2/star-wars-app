const apiUrl = 'https://swapi.dev/api/';

const Api = {
	getCategory: async (category) => {
		return await fetchApiData(`${apiUrl}${category}`.toLowerCase());
	},
	getSearch: async (category, searchFor) => {
		return await fetchApiData(
			`${apiUrl}${category}/?search=${searchFor}`.toLowerCase()
		);
	},
};

const fetchApiData = async (url) => {
	const requestUrl = url;
	const response = await fetch(requestUrl);

	return await response.json();
};

export default Api;

const cities = {
	"Sao Paulo": ["Rio", "Curitiba", "Belo Horizonte"],
	Rio: ["Sao Paulo", "Belo Horizonte", "Vitoria"],
	Curitiba: ["Sao Paulo", "Florianopolis"],
	"Belo Horizonte": ["Sao Paulo", "Rio", "Brasilia"],
	Brasilia: ["Belo Horizonte", "Goiania"],
	Florianopolis: ["Curitiba", "Porto Alegre"],
	"Porto Alegre": ["Florianopolis"],
};

/* Implementando o basico do BFS -> Pesquisa em largura */
const getInfoTravelCity = (cities = {}, sourceCity = "", targetCity = "") => {
	if (Object.keys(cities).length === 0) {
		return null;
	}

	if (!cities[sourceCity] || !cities[targetCity]) {
		return null;
	}

	const queue = [...cities[sourceCity]];
	const verifiedCities = [sourceCity];

	while (queue.length) {
		const cityName = queue.shift();

		if (!verifiedCities.includes(cityName)) {
			if (cityName === targetCity) {
				console.log(`Existe um caminho entre ${sourceCity} e ${targetCity}`);

				return {
					cities: `De  ${sourceCity} até ${targetCity}, você passará nas cidade(s) de(o) ${verifiedCities.join(", ")}`,
				};
			}

			console.log(cityName);

			verifiedCities.push(cityName);

			if (cities[cityName]) {
				queue.push(...cities[cityName]);
			}
		}
	}

	console.log(`Não há caminho entre ${sourceCity} e ${targetCity}`);

	return null;
};

const result = getInfoTravelCity(cities, "Sao Paulo", "Brasilia");

console.log(result);

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
		return false;
	}

	if (!cities[sourceCity] || !cities[targetCity]) {
		return false;
	}

	const queue = [...cities[sourceCity]];
	const verifiedCities = [sourceCity];

	const parent = { [sourceCity]: null }
	const distance = { [sourceCity]: 0 }

	while (queue.length) {
		const currentCity = queue.shift();

		verifiedCities.push(currentCity);

		if (currentCity === targetCity) {
			console.log({ distance });

			return true
		}

		/* Caso a cidade nao estejam definidas no grafo */
		if (!cities[currentCity]) {
			continue
		}

		/* Verificando se o currentCity contem vizinhos */
		for (const neighbor of cities[currentCity]) {
			const visitedCity = verifiedCities.includes(neighbor)

			if (!visitedCity) {
				parent[neighbor] = currentCity
				distance[neighbor] = distance[currentCity] + 1

				queue.push(neighbor)
				verifiedCities.push(neighbor);
				
			}
		}
	}
	
	console.log(`Não há caminho entre ${sourceCity} e ${targetCity}`);

	return false;
};

const result = getInfoTravelCity(cities, "Sao Paulo", "Brasilia");

console.log(result);

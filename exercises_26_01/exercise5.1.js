/* 
    Exercício 5.1 - Sistema de Cache
    Implemente um sistema de cache simples usando uma tabela hash (objeto JavaScript) que:

    Armazena resultados de funções custosas
    Tem um limite de tamanho (ex: 5 itens)
    Remove o item mais antigo quando excede o limite
*/

class Cache {
	constructor(lengthMax) {
		this.items = {};

		this.lengthMax = lengthMax;
	}

	get(key) {
		return this.items[key];
	}

	set(key, value) {
		if (Object.keys(this.items).length >= this.lengthMax) {
			const firstElementKey = Object.keys(this.items)[0];

			delete this.items[firstElementKey];
		}

		this.items[key] = value;
	}

	getItems() {
		console.log(this.items);
	}
}

const cache = new Cache(5);

cache.set("Igor", 24);
cache.set("Vitinho", 26);
cache.set("Gabinho", 22);
cache.set("Iris", 24);
cache.set("Bia", 28);
cache.set("Renan", 24);

cache.getItems();

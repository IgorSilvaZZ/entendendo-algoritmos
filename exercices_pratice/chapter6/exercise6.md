Desafio: Planejador de Viagens entre Cidades
Contexto: Você tem um mapa de cidades conectadas por estradas. Precisa planejar viagens entre elas.

O Mapa (comece simples):
São Paulo → [Rio, Curitiba, Belo Horizonte]
Rio → [São Paulo, Belo Horizonte, Vitória]
Curitiba → [São Paulo, Florianópolis]
Belo Horizonte → [São Paulo, Rio, Brasília]
Brasília → [Belo Horizonte, Goiânia]
Florianópolis → [Curitiba, Porto Alegre]
Porto Alegre → [Florianópolis]

Parte 1 - Básico
Implemente BFS para:

Verificar se é possível viajar entre duas cidades
Mostrar o caminho (quais cidades passar)
Dizer quantas "paradas" são necessárias

Parte 2 - Melhorando

Mostre TODOS os caminhos possíveis com o mesmo número mínimo de paradas
Adicione mais cidades (15-20) para testar com grafos maiores

Parte 3 - Estatísticas

Qual cidade é a mais "central"? (tem menor distância média para todas as outras)
Quais duas cidades são as mais distantes?
Se uma cidade ficar isolada (estrada bloqueada), quantas outras ficam inacessíveis?
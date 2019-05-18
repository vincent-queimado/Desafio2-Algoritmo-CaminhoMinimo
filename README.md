![version](https://img.shields.io/badge/version-1.0.0-blue.svg?longCache=true&style=flat-square)

# DESAFIO N°2 - Problema do caminho mínimo

## Objetivo do desafio:

Dado o grafo da Figura 2, implementa um algoritmo em NodeJs que encontre o caminho de menor custo a partir de um nó de origem. Imprima o resultado do custo e o caminho calculado a partir do vértice 0 para todos os outros.

<p align="center">
  <img src="https://everguard.com.br/desafios/grafo_desafio2.png" width="600" title="Figura 2" alt="Figura 2">
</p>

### Requisitos

* [NodeJs](https://nodejs.org/en/) - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

### Instalação

1. Realizar o download ou clone do projeto;
2. Descompactar o projeto;
3. Abrir um terminal de comando a partir da pasta do projeto;
4. Executar o arquivos App.js do projeto a partir do comando:

```
$ node app.js
```

### Criação dos nós de acordo com os vértices do grafo:

```
route.addNode('0', new Map([
    ['1', 2],
    ['4', 3]
]));

route.addNode('1', new Map([
    ['0', 2],
    ['3', 8],
    ['5', 9],
    ['6', 6]
]));

route.addNode('2', new Map([
    ['5', 3],
    ['6', 7]
]));

route.addNode('3', new Map([
    ['1', 8],
    ['7', 6]
]));

route.addNode('4', new Map([
    ['0', 3],
    ['6', 5],
    ['7', 9],
]));

route.addNode('5', new Map([
    ['1', 9],
    ['2', 3],
    ['6', 4],
    ['7', 5]
]));

route.addNode('6', new Map([
    ['1', 6],
    ['2', 7],
    ['4', 5],
    ['5', 4]
]));

route.addNode('7', new Map([
    ['3', 6],
    ['4', 9],
    ['5', 5]
]));
```

### Resultado
Formato de saída (Vertex, Cost, Path).

Resultado de todos os vértices do grafo a partir do vértice 0. O calculo foi realizado com base na técnica de algoritmo de Dijkstra.

```
1,2,0-1
2,14,0-1-5-2
3,10,0-1-3
4,3,0-4
5,11,0-1-5
6,8,0-1-6
7,12,0-4-7
```

<p align="center">
  <img src="https://everguard.com.br/desafios/resultado_desafio2.png" width="600" title="Resultado Desafio 2" alt="Resultado Desafio 2">
</p>




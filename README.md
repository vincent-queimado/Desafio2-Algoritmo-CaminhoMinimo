![version](https://img.shields.io/badge/version-1.0.0-blue.svg?longCache=true&style=flat-square)

# DESAFIO N°2 - Problema do caminho mínimo

## Objetivo do desafio:

Dado um grafo, implementa um algoritmo em NodeJs que encontre o caminho de menor custo a partir de um nó de origem. Imprima o resultado do custo e o caminho calculado a partir do vértice 0 para todos os outros.

<p align="center">
  <img src="https://everguard.com.br/desafios/grafo_desafio2.png" width="600" title="hover text" alt="accessibility text">
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

### Tabela de representação dos vértices do grafo:

```
vertices = [
    [0, 1, 2],
    [0, 4, 3],
    [1, 0, 2],
    [1, 3, 8],
    [1, 5, 9],
    [1, 6, 6],
    [2, 5, 3],
    [2, 6, 7],
    [3, 1, 8],
    [3, 7, 6],
    [4, 0, 3],
    [4, 6, 5],
    [4, 7, 9],
    [5, 1, 9],
    [5, 2, 3],
    [5, 6, 4],
    [5, 7, 5],
    [6, 1, 6],
    [6, 2, 7],
    [6, 4, 5],
    [6, 5, 4],
    [7, 3, 6],
    [7, 4, 9],
    [7, 5, 5]]
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





//app.js

//************************************************* DESAFIO N°2 *****************************************************//
//*** File: app.js																							      ***//
//*** 																				  							  ***//
//*** Date:17/05/2019																							  ***//
//*** Author: Vincent Queimado																					  ***//
//*******************************************************************************************************************//


//******************************************** IMPORTAÇÃO DE ALGORITMO **********************************************//

const Graph = require('./lib/algorithm');

//******************************************* DECLARAÇÃO DE NOVO GRAFO **********************************************//
const route = new Graph();

//****************************************** DECLARAÇÃO DE NÓS DO GRAFO *********************************************//
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


//********************************** PROCURA O MELHOR CAMINHO PARA CADA VERTICE ***********************************//
var vertStart = '0'; // Custo e o caminho calculado a partir do vértice 0

console.log("Desafio n°2 - Imprima o resultado do custo e o caminho calculado a partir do vértice 0 para todos os outros. \n");

console.log("Com base no grafo do desafio:");
console.log(route.graph);

console.log("\nResultado (Formato: Vertex,Cost,Path):");

route.graph.forEach((value, key) => {
    var cost;
    var vertex;
    var path;

    if (vertStart != key) {
        var result = route.path(vertStart, key);
        var pathStr = null;

        vertex = key;
        cost = result.distance;
        path = result.path;

        for (i = 0; i < path.length; i++) {
            if (pathStr === null) {
                pathStr = path[i];
            } else {
                pathStr = pathStr + "-" + path[i];
            }
        }

        console.log(vertex + "," + cost + "," + pathStr);
    }


});
# Infra Gen

### O código na pasta `src` define os seguintes módulos

- `dom.ts` lida com interaçõs simples com o DOM
- `graph.ts` gerencia o grafo de nodos a ser gerado
-  `maps.ts` lida com desenhar o mapa na tela apropriadamente

## Maps

Maps inicialmente define os icones necessários para exibir os nodos, selecionado e não selecionado, define também as funções gerais dos botões de upload, download e deletar nodo.

Também lida com o `enventListener` do objeto do mapa, que quando clicado deve gerar um novo nodo na posição clicada, este nodo tem então uma função ligada a ele que é invocada quando este nodo
é clicado, nesta função se o nodo for o selecionado no momento, ele des-seleciona o nodo e muda o incone, se não for houver um nodo selecionad, ele simplesmente se torna selecionado e muda seu ícone de acordo,
se houve um nodo selecionado e este nodo for clicado, cria um novo arco entre os dois nodos e seleciona o nodo clicado.

## Graph

Este modulo define inicialmente o `GraphNode` que armazena seus vizinhos no grafo, e as variaveis necessárias para suas interações como mapa, seus metodos são simples, vale notar o `csvfy()`
que retorna uma string separada por `\t` com os valores importantes do nodo de forma a armazenala como linha de um arquivo `.csv`.

Define tabém a classe `Graph` que armazena seus nodos em um mapa pois os ids nem sempre se alinham com os índices. `Graph` tem funções simples de adicionar e remover nodos, funções que valem 
ressaltar são `csvfy()` que assim como a do `GraphNode` apresenta o grafo e todos os seus nodos em forma de texto próprio para um arquivo `.csv`. `download` realiza o download do grafo na maquina
do usuário em formato de `csv`. E `load_csv` que le um arquivo `.csv` por upload e preenhe o grafo de acordo, de maneira que o usuário possa salvar seu trabalho na própria maquina e retomar ou editar
a qualquer momento. Um adendo é que em `load_csv`, na parte refernete a criação de um novo nodo, a função que é definidad como `click_handler` do nodo criado é colada do `maps.ts` pois definem o mesmo comportamento.

# Desafio

Faça um script/sistema, em qualquer linguagem de programação, que verifique quantas `voltas` existem dentro dos arrays de exemplo abaixo, levando em consideração que:
 - Cada `volta` deve ser considerada quando a mesma posição do array for visitada mais de 1 vez, na mesma `volta`
 - O número dentro do array apresentado é o índice que deve ser visitado na próxima iteração
 - O array começa no índice 0
 - Retornar o total de `voltas` dentro do array de exemplo

Exemplo 1:

`[1,2]`

A iteração começa no primeiro elemento, no índice `0`. Nesta posição está o número `1`, então a próxima iteração deverá ser no índice `1`. No índice `1` existe o valor `2`, então a próxima iteração deverá ser no índice `2`. O índice `2` não existe, então a iteração deve cessar, e nenhuma `volta` foi encontrada.

Exemplo 2:

`[1,3,4,0,2]`

Existem 2 `voltas` neste array:

`0 -> 1 -> 3 -> 0 -> fim`, 1ª `volta` encontrada
`2 -> 4 -> 2 -> fim`, 2ª volta encontrada

Arrays de entrada:

 - `[1,2,3,4,5,6,7,8,9,0]`
 - `[3,2,0,1,4]`
 - `[7,0,4,2,3,1,6]`

# Documentação

Atualize este README sobre como rodar em desenvolvimento e como efetuar o deploy, se aplicável.
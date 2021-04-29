# Desafio

Faça um script/sistema, em qualquer linguagem de programação, que ofereça funções CRUD (**C**reate, **R**ead, **U**pdate e **D**elete).

# Contexto

Com o crescimento do mercado imobiliário nos últimos 10 anos, diversos sistemas para incorporadoras/construtoras foram criados ao longo do tempo, cada um com um propósito específico.

Com isso surgiu a necessidade de criar um novo software, unindo as funcionalidades de todos os anteriores, para uma utilização mais simples e rápida.

# Desafio

É aí que você entra!

Sua missão é criar uma parte deste novo sistema.

## Frontend

Deve ser criado o frontend para consumir o backend/API, contendo:

 - Tela inicial, com a listagem dos registros (colunas de exibição ao seu critério)
   - Filtros de busca por `data de início`e `data de término`
   - Ordenação por `menor budget`, `maior budget`, `A-Z` e `Z-A`
   - Paginação
 - Tela para cadastro e edição
 - Exclusão
 - O visual/interface é ao seu critério

## Backend/API

Deve ser criado o backend/API, para fazer o processamento dos dados e regra de negócio.

A paginação, ordenação e filtragem deves ser feitos preferencialmente na API.

## Banco de dados

Os dados devem ser armazenados em algum local.

Como exemplo de estrutura e massa de dados, o JSON de nome `exemplo.json`, nesta mesma pasta, deve ser utilizado. Converta-o para o banco de dados utilizado.

Possuímos preferência por banco de dados MySQL (caso seja utilizado, informar na documentação como importar o banco de dados, como configuração a conexão e fornecer também o arquivo SQL com a estrutura/dados utilizados).

Porém, caso não possua familiaridade com MySQL, é possível utilizar quaisquer outras tecnologias, até mesmo o próprio JSON.

# Observações

Neste desafios existem vários conceitos/funcionalidades/detalhes de diferentes níveis, acreditamos que o entendimento do conceito geral é o mais importante, portanto não tem problema entregar este teste sem alguns conceitos, funcionalidades e/ou alguns detalhes.

# Documentação

Atualize este README sobre como rodar em desenvolvimento e como efetuar o deploy em servidor de produção.
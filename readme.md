# ZX Ventures Backend Challenge

Node API para buscar o PDV que seja o mais próximo a atender determinadas coordenadas. Além de possuir inserção, buscar por id e listar todos.

## Tecnologias e Motivos da escolha

- Node.js - Escolhido por ser cross-platform em Javascript e ser de fácil manipulação.
- MySQL - Escolhido por poossuir inúmeras funções de Geografia e Geolocalização.
- Docker - Componentização facilita a entrega/execução do projeto.
- Docker-Compose - Facilitador na criação e execução das imagens.

## Requisitos

- Docker
- Docker-Compose
- Obs. o API escutará através da porta 7000 e o MySQL a porta 3306, é fundamental que estas portas estejam disponíveis.

## Observação

- O Dockerfile referente à imagem MySQL contém a execução de um script SQL para inserção manual de 20 registros pdvs iniciais.
- O arquivo postman-sample-request.json na raiz do projeto contém alguns exemplos de requests para a API.

## Executar o Projeto

- Para executar o projeto, dentro da pasta raiz do projeto execute o comando 'docker-compose up --build -d' 
- Este comando irá compilar e subir suas imagens docker, disponibilizando um api que escuta através de 'http://localhost:7000'

## Rotas 

- GET: http://localhost:7000/pdvs - Lista todos os pdvs.
- GET: http://localhost:7000/pdvs/id - Obtém um pdv por id.
- GET: http://localhost:7000/pdvs/lng/lat - Obtém o PDV que seja o mais próximo a atender as coordenadas lng e lat
- POST: http://localhost:7000/pdvs - Insere um novo PDV (Todos os campos são obrigatórios, inclusive o id)

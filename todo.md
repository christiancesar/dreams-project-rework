# Features
- [X] apiGateway - centraliza as chamas para os outros serviços
  
  - Atualmente se parece mais com um Monólito do que um Microsserviço
  
  - Poderia aplicar o pattern Strangle, mostraria o progresso de uma aplicação monolítica -> microsserviços

- [X] emailService - responsável disparar emails seja independente do serviço que solicita.

- [ ] userService - Serviço responsável pelo cadastro, autenticação e manutenção do usuário.

- [ ] flightService - Serviço de pesquisa de voos, pesquisa em uma ou mais apis

- [ ] hotelService - Serviço de pesquisa de hotel, pesquisa em uma ou mais apis

- [ ] packageService - Constrói ou monta pacotes de viagens, de acordo com os parâmetros que o usuário informar. Faz uso dos dois serviços flightService e hotelService.
  


# Requisitos

## Funcionais

- [ ] Cliente(FrontEnd, Insomnia ou PostMan) deve ser capaz de escolher pesquisar voos, hotéis ou pacote(voos e hotéis), disponível para determinada região.


## Não Funcionais

- [ ] Cada serviço deve conter seu próprio banco de dados, deve ser usado MongoDb. Dada as circunstâncias, MongoDb traz uma complexidade baixa e é um ótimo banco de dados para trabalhar com arquivos grandes.

- [ ] A comunicação deve ser feita com gRPC, desenvolvi um pequeno exemplo em TypeScript [gRPC with TypeScript](https://github.com/christiancesar/grpc-with-typescript)

- [ ] Cada serviço deve ser subir em containers separados, aprender a mexer com docker-compose 😄😅
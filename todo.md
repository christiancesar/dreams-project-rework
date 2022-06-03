# Features
- [X] apiGateway - centraliza as chamas para os outros serviços
  
  - Atualmente se parece mais com um Monólito do que um Microsserviço
  
  - Poderia aplicar o pattern Strangle, mostraria o progresso de uma aplicação monolítica -> microsserviços

- [X] emailService - responsável disparar emails seja independente do serviço que solicita.

- [x] userService - Serviço responsável pelo cadastro, autenticação e manutenção do usuário.
    
  - [x] Servidor
    
  - [x] Banco de dados 
    
  - [x] CRUD 
    
  - [x] Comunicando com ApiGateway 
    
  - [ ] Comunicando com emailService

- [ ] flightService 

  - [x] Serviço de pesquisa de voos, pesquisa em uma ou mais apis

  - [x] Confirmar/comprar passagem area, deve persistir dentro do banco de dados

- [x] hotelService - Serviço de pesquisa de hotel, pesquisa em uma ou mais apis

- [ ] Capturar erros e enviar erros para o client, que não seja `Internal Error`
- [ ] packageService - Constrói ou monta pacotes de viagens, de acordo com os parâmetros que o usuário informar. Faz uso dos dois serviços flightService e hotelService.
  
- [ ] Reforar UsersService para persistir dados de viagens:
  
  ```typescript
    type user = {
      id : "a8b70b8f-f069-4187-bcc9-3edc6f833678",
      email : "christian.cesar@gmail.com",
      firstName : "Christian Cesar",
      lastName : "Rodrigues",
      age : 24,
      birthday : "1997-11-01",
      payments: [
        "dd600698-6e54-4d7a-80a6-e1924dad4092"
      ],
      trips: {
        packages: [
          "6283864c-b63a-4782-9447-27e67528d353",
          "2b0be2a7-c650-47c4-8657-198fff173087"        
        ],
        flights: [
          "4c51b8c3-e1cd-4807-adb5-af804dd9ea53"
        ],
        hotels: [
          "50cde896-7776-41ba-8353-8f347c03cbd5"
        ]
      }
    }
    ```

# Requisitos

## Funcionais

- [x] Cliente(FrontEnd, Insomnia ou PostMan) deve ser capaz de escolher pesquisar voos, hotéis ou pacote(voos e hotéis), disponível para determinada região.


## Não Funcionais

- [x] Cada serviço deve conter seu próprio banco de dados, deve ser usado MongoDb. Dada as circunstâncias, MongoDb traz uma complexidade baixa e é um ótimo banco de dados para trabalhar com arquivos grandes.

- [x] A comunicação deve ser feita com gRPC, desenvolvi um pequeno exemplo em TypeScript [gRPC with TypeScript](https://github.com/christiancesar/grpc-with-typescript)

- [ ] Cada serviço deve ser subir em containers separados, aprender a mexer com docker-compose 😄😅
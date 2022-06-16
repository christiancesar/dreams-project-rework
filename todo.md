# To-do

- [ ] Capturar erros e enviar erros para o client, que não seja `Internal Error`

- [ ] packageService 
  - [x] Consultar serviço de voo e hotel para montar pacote
  - [ ] Salvar no banco de dados do Package Microservice
  - [ ] Salvar no banco de dados do Flight Microservices o do pacote voo
  - [ ] Salvar no banco de dados do Hotel Microservices o do pacote voo
  - [x] Estrutura
  
  ```ts
    model Package {
      id        String   @id @default(auto()) @map("_id") @db.ObjectId
      hotelId   String   @db.ObjectId
      flightId  String   @db.ObjectId
      userId    String   @db.ObjectId
      createdAt DateTime @default(now())
      updatedAt DateTime @updatedAt
    }
  ```

- [ ] Refatorar models Hotel, Flight e Package: Incluir objeto pagamento.
  
  ```typescript
    //incluir em todos models
    createAt: Date();
    updateAt: Date();

    enum StatusPayment {
      PENDENTE="PENDENTE",
      RECUSADO="RECUSADO",
      PAGO="PAGO",
    }

    type payment = {
      amount: number;
      status: StatusPayment;
      createAt: Date();
      updateAt: Date();
    }
  ```



    
## ApiGateway
  - Objeto User tem de retornar para o cliente todos os dados em uma única consulta:
  
    ```typescript
    type user = {
      id : "a8b70b8f-f069-4187-bcc9-3edc6f833678",
      email : "christian.cesar@gmail.com",
      firstName : "Christian Cesar",
      lastName : "Rodrigues",
      age : 24,
      birthday : "1997-11-01",
      trips: {
        packages: [
          {
            //all fields
          },
          {
            //all fields
          }      
        ],
        flights: [
          {
            //all fields
          }
        ],
        hotels: [
          {
            //all fields
          }
        ]
      }
    }
  ```
  - **Trips:** retorna todo pacote, voo ou hotel. 
    - Retorna apenas Id's é a melhor solução? Retornando apenas Id's o consumo de recursos aumenta e o cliente vai ficar esperando de mais, dependendo da quantidade de histórico.


# Features

## Tipificação de dados

 - Incluir todas as tipificações no models do prisma dos microsserviços. Atualmente eu salvo ele como sendo um tipo **Prisma.JSONObject** ou **Prisma.JSONArray**.

 - Porém gera muitos models desnecessários. Enquanto a necessidade era apenas de tipificar. O Prisma tem algo de tipificação personalizada, porém não entrei muito a fundo.

 
 ```ts
 //schema.prisma
  
  generator client {
    provider = "prisma-client-js"
  }

  datasource db {
    provider = "mongodb"
    url      = env("DATABASE_URL")
  }
  
  model Itinerary {
    id       String    @id @default(auto()) @map("_id") @db.ObjectId
    duration String
    segments Segment[]
    Flight   Flight?   @relation(fields: [flightId], references: [id])
    flightId String?   @db.ObjectId
  }
  
  model Segment {
    id              String     @id @default(auto()) @map("_id") @db.ObjectId
    departure       Departure  @relation(fields: [departureId], references: [id])
    arrival         Arrival    @relation(fields: [arrivalId], references: [id])
    carrierCode     String
    number          String
    aircraft        Aircraft   @relation(fields: [aircraftId], references: [id])
    operating       Operating  @relation(fields: [operatingId], references: [id])
    duration        String
    segmentId       String
    numberOfStops   Int
    blacklistedInEU Boolean
    Itinerary       Itinerary? @relation(fields: [itineraryId], references: [id])
    itineraryId     String?    @db.ObjectId
    arrivalId       String     @db.ObjectId
    departureId     String     @db.ObjectId
    aircraftId      String     @db.ObjectId
    operatingId     String     @db.ObjectId
  }
  
  model Aircraft {
    id      String    @id @default(auto()) @map("_id") @db.ObjectId
    code    String
    Segment Segment[]
  }
  
  model Departure {
    id       String    @id @default(auto()) @map("_id") @db.ObjectId
    iataCode String
    at       String
    Segment  Segment[]
  }
  
  model Arrival {
    id       String    @id @default(auto()) @map("_id") @db.ObjectId
    iataCode String
    at       String
    Segment  Segment[]
  }
  
  model Operating {
    id          String    @id @default(auto()) @map("_id") @db.ObjectId
    carrierCode String
    Segment     Segment[]
  }
  
  enum StatusPayment {
    PENDING
    REFUSED
    PAID
  }
  
  model Payment {
    id        String        @id @default(auto()) @map("_id") @db.ObjectId
    amount    Float
    status    StatusPayment @default(PENDING)
    Flight    Flight[]
    createdAt DateTime      @default(now())
    updatedAt DateTime      @updatedAt
  }
  
  model Flight {
    id          String      @id @default(auto()) @map("_id") @db.ObjectId
    itineraries Itinerary[]
    price       Json
    payment     Payment     @relation(fields: [paymentId], references: [id])
    paymentId   String      @db.ObjectId
    createdAt   DateTime    @default(now())
    updatedAt   DateTime    @updatedAt
  
  }

 ```

 
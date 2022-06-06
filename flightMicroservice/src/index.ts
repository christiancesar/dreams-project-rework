import { Server, ServerCredentials } from "@grpc/grpc-js";
import { promisify } from "util";
import FlightServiceProto from "./protos/implementations/FlightServiceProto";
import { prisma } from '../prisma';
import { FlightsService } from "dreams-proto-sharing/src/contracts/flight/flights_grpc_pb";

const server = new Server()
server.addService(FlightsService, new FlightServiceProto())

const bindPromise = promisify(server.bindAsync).bind(server)

bindPromise('0.0.0.0:50053', ServerCredentials.createInsecure())
  .then(async (port) => {
    await prisma.$connect()

    console.log(`listening on ${port}`)
    server.start()
  })
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect()
  })
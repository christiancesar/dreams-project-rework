import { ChannelCredentials } from '@grpc/grpc-js';
import { FlightsClient } from '../protos/flight/flights_grpc_pb';

const flightClient = new FlightsClient('0.0.0.0:50053', ChannelCredentials.createInsecure()) 

export default flightClient;
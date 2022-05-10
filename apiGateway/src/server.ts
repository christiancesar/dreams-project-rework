import cors from 'cors';
import express from 'express';
import { prisma } from '../prisma';
import { CreateUserService } from './modules/users/services/CreateUserService';
import routes from './routes';
import StripeFunctions from './services/stripe/StripeFunctions';

const server = express();

const createUserService = new CreateUserService();

server.use(cors());

server.use(express.json());

server.use(routes);

// stripeFunctions.product();

async function main() {
  await prisma.$connect()

  server.listen(3333, () => {
    console.log('Server listen on port 3333! 🍹')
  })
}

main()
.catch(err => console.error(err))
.finally(async () => {
  await prisma.$disconnect()
})

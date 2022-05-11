import cors from 'cors';
import express from 'express';
import { prisma } from '../prisma';
import routes from './routes';

const server = express();

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

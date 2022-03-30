import { Router } from "express";
import { UsersControllers } from "./modules/users/controllers/UsersControllers";
import { FlightsController } from "./modules/flights/controllers/FlightsController";
import { HotelsController } from "./modules/hotels/controllers/HotelsController";
import flightsRouter from "./modules/routes";


const routes = Router();
const usersControllers = new UsersControllers();
const flightsController = new FlightsController();
const hotelsController = new HotelsController();

routes.post('/users', usersControllers.create);
routes.get('/users', usersControllers.index);
routes.get('/users/:userId', usersControllers.show);
routes.patch('/users', usersControllers.update);

routes.use('/flights', flightsRouter)

routes.get('/hotels', hotelsController.index)

export default routes;
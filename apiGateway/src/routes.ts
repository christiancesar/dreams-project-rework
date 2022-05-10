import { Router } from "express";
import { UsersControllers } from "./modules/users/controllers/UsersControllers";
import { FlightsController } from "./modules/flights/controllers/FlightsController";
import { HotelsController } from "./modules/hotels/controllers/HotelsController";
import PackageControllers from "./modules/package/controllers/PackageControllers";


const routes = Router();
const usersControllers = new UsersControllers();
const flightsController = new FlightsController();
const hotelsController = new HotelsController();
const packageControllers = new PackageControllers();

routes.post('/users', usersControllers.create);
routes.get('/users', usersControllers.index);
routes.get('/users/:userId', usersControllers.show);
routes.patch('/users', usersControllers.update);

routes.get('/flights', flightsController.index)
routes.post('/flights', flightsController.create)

routes.get('/hotels', hotelsController.index)

routes.get('/packages', packageControllers.index)
export default routes;
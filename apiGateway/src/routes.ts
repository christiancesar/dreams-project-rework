import { Router } from "express";
import flightsRouter from "./modules/flights/routes/flightsRouter";
import { HotelsController } from "./modules/hotels/controllers/HotelsController";
import PackageControllers from "./modules/package/controllers/PackageControllers";
import usersRouter from "./modules/users/routes/usersRouter";


const routes = Router();

const hotelsController = new HotelsController();
const packageControllers = new PackageControllers();

routes.use('/users', usersRouter);

routes.use('/flights', flightsRouter)

routes.get('/hotels', hotelsController.index)

routes.get('/packages', packageControllers.index)
export default routes;
import { Router } from "express";
import { UsersControllers } from "./users/controllers/UsersControllers";


const routes = Router();
const usersControllers = new UsersControllers();

routes.post('/users', usersControllers.create);
routes.get('/users', usersControllers.index);
routes.get('/users/:userId', usersControllers.show);
routes.patch('/users', usersControllers.update);

export default routes;
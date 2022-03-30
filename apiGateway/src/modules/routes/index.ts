import { Router } from "express";
import { FlightsController } from "../flights/controllers/FlightsController";

const flightsRouter = Router();

const flightsController = new FlightsController();

flightsRouter.get('/', flightsController.index)


export default flightsRouter;

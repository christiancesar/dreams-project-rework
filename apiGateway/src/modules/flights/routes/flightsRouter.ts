import { Router } from "express";
import { FlightsController } from "../controllers/FlightsController";


const flightsRouter = Router();
const flightsController = new FlightsController();


flightsRouter.get('/:flightId', flightsController.show)
flightsRouter.get('/', flightsController.index)
flightsRouter.post('/', flightsController.create)


export default flightsRouter
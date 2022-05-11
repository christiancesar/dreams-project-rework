import { Router } from "express";
import { HotelsOffersController } from "../controllers/HotelsOffersController";

const hotelsOffersRouter = Router()
const hotelsOffersController = new HotelsOffersController();

hotelsOffersRouter.get('/', hotelsOffersController.index)

export default hotelsOffersRouter;
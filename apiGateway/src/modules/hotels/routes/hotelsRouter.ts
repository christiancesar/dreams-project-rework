import { Router } from "express";
import { HotelsController } from "../controllers/HotelsController";

const hotelsRouter = Router()
const hotelsController = new HotelsController();

hotelsRouter.get('/', hotelsController.index)

export default hotelsRouter;
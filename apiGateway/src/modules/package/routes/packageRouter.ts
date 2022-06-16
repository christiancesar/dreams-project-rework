import { Router } from "express";
import PackageControllers from "../controllers/PackageControllers";
import packageOffersRouter from "./packageOffersRouter";

const packageRouter = Router();
const packageControllers = new PackageControllers();

packageRouter.use('/offers', packageOffersRouter);

packageRouter.post('/', packageControllers.create);

export default packageRouter;
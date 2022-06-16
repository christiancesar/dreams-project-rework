import { Router } from "express";
import PackageOffersControllers from "../controllers/PackageOffersControllers";

const packageOffersRouter = Router();
const packageOffersControllers = new PackageOffersControllers();

packageOffersRouter.use('/', packageOffersControllers.index)

export default packageOffersRouter;
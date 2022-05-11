import { Router } from "express";
import PackageControllers from "../controllers/PackageControllers";

const packagesRouter = Router();
const packageControllers = new PackageControllers();

packagesRouter.use('/packages', packageControllers.index)

export default packagesRouter;
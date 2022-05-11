import { Router } from "express";
import hotelsOffersRouter from "./hotelsOffersRouter";


const hotelRouter = Router();

hotelRouter.use('/offers', hotelsOffersRouter);

hotelRouter.get('/',)

export default hotelRouter;


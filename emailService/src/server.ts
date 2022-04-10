import express, { NextFunction, Request, Response } from "express";
import { router } from "./router";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3030, () => {
  console.log('Server listening!');
})
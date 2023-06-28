import express, { Application, NextFunction, Request, Response } from "express";

const app: Application = express();
const port: Number = 3000;

// routes
app.use("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: "hello world" });
});

app.listen(port, () => {
  console.log("express listen at port", port);
});

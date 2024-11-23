import express, { Application, Request, Response } from 'express';
import cors from 'cors';

// const express = require('express')
const app: Application = express();
// const port = 3000
// parser
app.use(express.json());
app.use(cors());
// const getOperations=
app.get('/', (req: Request, res: Response) => {
  // const a = 10;
  res.send('hello bike-riders');
});
export default app;

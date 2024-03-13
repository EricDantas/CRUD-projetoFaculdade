import "reflect-metadata";
import express, { response } from "express";
import "./database";
import { routes } from "./routes";
import { request } from "http";
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

app.listen(3000, () => console.log("Servidor Iniciado"));
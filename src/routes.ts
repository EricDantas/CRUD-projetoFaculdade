import { Router } from "express";
import { CreateEscolaController } from "./controllers/CreateEscolaController";
import { GetAllEscolaController } from "./controllers/GetAllEscolaController";
import { DeleteEscolaController } from "./controllers/DeleteEscolaController";
import { UpdateEscolaController } from "./controllers/UpdateEscolaController";
import { CreateProfessorController } from "./controllers/CreateProfessorController";
import { GetAllProfessorController } from "./controllers/GetAllProfessorController";
import { DeleteProfessorController } from "./controllers/DeleteProfessorController";
import { UpdateProfessorController } from "./controllers/UpdateProfessorController";


const routes = Router();

routes.post("/escola", new CreateEscolaController().handle)
routes.get("/escola", new GetAllEscolaController().handle)
routes.delete("/escola/:id", new DeleteEscolaController().handle)
routes.put("/escola/:id", new UpdateEscolaController().handle)

routes.post("/professor", new CreateProfessorController().handle)
routes.get("/professor", new GetAllProfessorController().handle)
routes.delete("/professor/:matricula", new DeleteProfessorController().handle)
routes.put("/professor/:matricula", new UpdateProfessorController().handle)

export {routes}
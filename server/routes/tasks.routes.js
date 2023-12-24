import { Router } from "express";
import {
  getTasks,
  deleteTasks,
  updateTask,
  getTask,
  createTask,
} from "../controllers/tasks.controllers.js";


const router = Router();


router.get("/tasks",getTasks);


router.get("/tasks/:id",getTask);


router.post("/tasks",createTask);


router.put("/tasks/:id",updateTask);


router.delete("/tasks/:id",deleteTasks);



export default router;

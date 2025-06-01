import express from 'express';
import { getTodos, createTodo, deleteTodo, updateTodo } from "../controllers/todoController.js";


const router=express.Router();


router.get("/",getTodos);
// router.get("/:id",)
router.post("/",createTodo);
router.put("/:id",updateTodo);
router.delete("/:id",deleteTodo);


export default router;


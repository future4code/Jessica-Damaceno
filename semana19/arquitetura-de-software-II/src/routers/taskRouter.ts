import express from 'express';
import { createTask } from '../controller/createTask';
import { getTaskById } from '../controller/getTaskById';

export const taskRouter = express.Router()

taskRouter.put('/', createTask)
taskRouter.get('/:id', getTaskById)
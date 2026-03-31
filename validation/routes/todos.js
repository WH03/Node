import express from 'express';
import { validate } from '../middleware/validation.js';
import { todoSchema, todoIdSchema } from '../schemas/todos.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get all todo items');
});

router.post('/', validate({ body: todoSchema }), (req, res) => {
  res.send('Create a new todo item');
});

router.put(
  '/:id',
  validate({ params: todoIdSchema, body: todoSchema }),
  (req, res) => {
    const { id } = req.params;
    res.send(`Update the todo item with id ${id}`);
  }
);

router.delete('/:id', validate({ params: todoIdSchema }), (req, res) => {
  const { id } = req.params;
  res.send(`Delete the todo item with id ${id}`);
});

router.get('/:id', validate({ params: todoIdSchema }), (req, res) => {
  const { id } = req.params;
  res.send(`Get the todo item with id ${id}`);
});

export default router;

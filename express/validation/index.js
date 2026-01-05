import express from 'express';
import todoRoutes from './routes/todos.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}.`);
});

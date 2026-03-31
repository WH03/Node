export const todos = [
  {
    id: 1,
    title: "Learn Node.js",
    completed: false,
  },
  {
    id: 2,
    title: "Learn Express.js",
    completed: false,
  },
  {
    id: 3,
    title: "Learn MongoDB",
    completed: true,
  },
];

export const nextTodoId = () => {
  let maxId = 0;
  todos.forEach((todo) => {
    if (todo.id > maxId) {
      maxId = todo.id;
    }
  });
  return maxId + 1;
};

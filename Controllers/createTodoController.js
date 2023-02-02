import Todo from "../Models/Todo";

export async function createTodoController(req, res) {
  const newTodo = new Todo({
    title: req.body,
  });

  const createdNewTodo = await newTodo.save();
  res.json(createdNewTodo);
}
//still need to add controllers

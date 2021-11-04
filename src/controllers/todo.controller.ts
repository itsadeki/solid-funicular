import Todo from "../models/todo.model";

class TodoController {
  todos: Todo[] = [];

  add(id: string, name: string, content: string) {
    this.todos.push(new Todo(id, name, content));
  }

  remove(id: string) {
    this.todos = this.todos.filter((todo) => todo.id != id);
  }

  update(dto: Partial<Todo>) {
    const { id } = dto;
    if (!id) throw new Error("Todo dto must provide an id");
    const index = this.todos.findIndex((todo) => todo.id == id);
    if (index == -1) throw new Error(`Todo with id ${id} was not found`);

    this.todos[index] = { ...this.todos[index], ...dto };
  }
}

export default TodoController;

import { makeObservable, observable, computed, action } from "mobx";
import { addTodoAPI, getTodoAPI } from "../api";

export class TodoStore {
  todos: string[] = [];
  root;
  constructor(root: any) {
    makeObservable(this, {
      todos: observable,
      todoList: computed,
      fetchTodo: action,
      addTodo: action,
    });
    this.root = root;
  }

  get todoList() {
    return this.todos;
  }

  fetchTodo() {
    console.log("fetch todo");

    getTodoAPI().then((todos) => (this.todos = todos));
  }

  async addTodo(s: string) {
    const newTodo = await addTodoAPI(s);
    this.todos = [...this.todos, newTodo];
  }
}

import { TodoStore } from "./TodoStore";
import { UserStore } from "./userStore";

class RootStore {
  todoStore;
  userStore;
  constructor() {
    this.userStore = new UserStore(this);
    this.todoStore = new TodoStore(this);
  }
}

export default RootStore;

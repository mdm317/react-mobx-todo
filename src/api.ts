export const addTodoAPI = (s: string): Promise<string> => {
  return new Promise((r) => {
    setTimeout(() => {
      r(s);
    }, 1000);
  });
};
export const getTodoAPI = (): Promise<string[]> => {
  return new Promise((r) => {
    setTimeout(() => {
      r(["todo1", "todo2", "todo3"]);
    }, 1000);
  });
};

import { MobXProviderContext, observer } from "mobx-react";
import React, { useContext, useEffect } from "react";
import RootStore from "./Mobx";
import Todo from "./Todo";
import { useStore } from "./useStore";
function TodoList(): JSX.Element {
  console.log("실행");

  // const context = useContext(MobXProviderContext) as RootStore;
  const context = useStore();
  useEffect(() => {
    console.log("mount");
    context.todoStore.fetchTodo();
  }, []);
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.elements.namedItem("input") as HTMLInputElement;
    context.todoStore.addTodo(input.value);
    input.value = "";
  };
  return (
    <>
      <form onSubmit={submit}>
        <input id="input"></input>
        <button>o</button>
      </form>
      <div>
        {context.todoStore.todos.map((todo: string) => (
          <div key={todo}>
            <Todo todo={todo}></Todo>
          </div>
        ))}
      </div>
    </>
  );
}
// observable 값을 써야만 업데이트된다 동작원리는??ㅠ
// todoStore.todos 값이 어디에도 없이 fetch 만 하면
// 업데이트가 되지 않는다(실행이 다시되지 않는다)
// usecontext 에 mobxcontext 도 필요하다 보니 커스텀 훅으로 만드는 방법도 있다
export default observer(TodoList);

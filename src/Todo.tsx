import { observer } from "mobx-react";
import React from "react";

function Todo({ todo }: { todo: string }): JSX.Element {
  return <div>{todo}</div>;
}
export default observer(Todo);
//prop 이 observable 값이면 자식 컴포넌트로 observer 로 감싸는게 최적화가 된다고 한다
// 잘은 모름 ㅠ

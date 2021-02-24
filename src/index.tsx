import { Provider } from "mobx-react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import RootStore from "./Mobx/index"; // 방금 만든 스토어 불러와줍니다.

const rootStore = new RootStore(); // 스토어 인스턴스를 만들고

ReactDOM.render(
  <Provider {...rootStore}>
    {/* Provider 에 props 로 넣어줍니다. */}
    <App />
  </Provider>,
  document.getElementById("root")
);

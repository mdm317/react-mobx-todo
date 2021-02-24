import { MobXProviderContext } from "mobx-react";
import React, { useContext } from "react";
import RootStore from "./Mobx";

export function useStore() {
  const context = useContext(MobXProviderContext) as RootStore;
  return context;
}

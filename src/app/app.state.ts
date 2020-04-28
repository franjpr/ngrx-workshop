import * as bananaStore from "./banana/state";
import { ActionReducerMap } from "@ngrx/store";

export interface AppState {
  banana: bananaStore.State;
}

export const initialState: AppState = {
  banana: bananaStore.initialState,
};

export const reducers: ActionReducerMap<AppState> = {
  banana: bananaStore.reducer,
};

export const getMyBanana = (s: AppState): bananaStore.State => s.banana;

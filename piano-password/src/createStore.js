import { useMemo } from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

let store;

const defaultState = {
  melody: "",
};

const persistConfig = {
  key: "primary",
  storage,
  whitelist: [], // place to select which state you want to persist
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MELODY":
      return {
        ...state,
        melody: state.melody + "," + action.value,
      };

    default:
      return state;
  }
};

const persistedReducer = persistReducer(persistConfig, reducer);

function makeStore(
  initialState = {
    melody: "default",
  }
) {
  return createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? makeStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore() {
  const store = useMemo(() => initializeStore(defaultState), [defaultState]);
  return store;
}

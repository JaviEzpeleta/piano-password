import { Provider as ReduxProvider } from "react-redux";
import { useStore } from "./createStore";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import "./App.css";
import PianoPassword from "./components/PianoPassword";

function App() {
  const store = useStore();
  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={<div></div>} persistor={persistor}>
        <PianoPassword />
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;

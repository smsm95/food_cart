import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./rootReducer";
import storage from "redux-persist/lib/storage";

// persisting the state through the application
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const persisted = () => {
  let store = createStore(persistedReducer, composedEnhancer);
  let persistor = persistStore(store);
  return { store, persistor };
};

export default persisted();

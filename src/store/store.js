import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./authReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const middleware = applyMiddleware(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  shop: AuthReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const pReducer = persistReducer(persistConfig, reducers);
const store = createStore(pReducer, composeEnhancers(middleware));
const persistor = persistStore(store);
//const store = createStore(rootReducers);

export { persistor, store, pReducer };

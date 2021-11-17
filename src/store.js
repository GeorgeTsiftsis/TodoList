import { createStore, combineReducers } from "redux";
import ToDoReducer from "./reducers/ToDoReducer";

const rootReducer = combineReducers({
  todos: ToDoReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;

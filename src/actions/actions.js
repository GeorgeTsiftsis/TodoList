import {
  CREATE_TODO,
  DELETE_TODO,
  CHANGE_COLOR,
  START_EDIT_TODO,
} from "./types";

export const createTodoActionCreator = ({ desc, i }) => {
  return {
    type: CREATE_TODO,
    payload: {
      id: Math.random(),
      desc: desc,
      editing: false,
      color: "white",
      i: i++,
    },
  };
};

export const deleteTodoActionCreator = ({ id }) => {
  return {
    type: DELETE_TODO,
    payload: {
      id: id,
    },
  };
};

export const startEditActionCreator = (id) => {
  return {
    type: START_EDIT_TODO,
    id,
  };
};

export const changeColorTodoCreator = ({ id }) => {
  return {
    type: CHANGE_COLOR,
    payload: {
      id,
    },
  };
};

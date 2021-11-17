import {
  CREATE_TODO,
  DELETE_TODO,
  CHANGE_COLOR,
  START_EDIT_TODO,
} from "../actions/types";

const initialState = [
  {
    id: Math.random(),
    desc: "Learn React",
    color: "#007bff",
  },
  {
    id: Math.random(),
    desc: "Understand Redux",
    color: "#ff007b",
  },
];

const ToDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO: {
      const { payload } = action;
      return [...state, payload];
    }
    case DELETE_TODO: {
      const { payload } = action;
      return state.filter((todo) => todo.id !== payload.id);
    }
    case START_EDIT_TODO: {
      const { id } = action;
      return state.map((todo) =>
        todo.id === id ? { ...todo, editing: true } : todo
      );
    }

    case CHANGE_COLOR: {
      const { payload } = action;
      const { id } = payload;
      const colors = ["orange", "green", "#007bff", "yellow"];
      console.log(colors);
      const todo = state.findIndex((todo) => {
        todo.id === payload.id;
      });
      let colorIndex = 0;
      colorIndex = colors.map((color, i) => {
        if (todo.color == color) return i;
      });

      console.log(colorIndex);
      colorIndex = colorIndex == undefined ? 1 : colorIndex;
      const newColourIndex = colorIndex.indexOf();
      console.log(newColourIndex);
      // colorIndex = colorIndex === undefined ? 0 : colorIndex //removethat
      //  const newColourIndex= colorIndex.indexOf() + 1        //removethat
      const tente = colors.indexOf(id.color) + 2;
      console.log(newColourIndex, tente);

      return state.map((todo) =>
        todo.id == id ? { ...todo, color: colors[newColourIndex] } : todo
      );
    }

    default:
      return state;
  }
};

export default ToDoReducer;

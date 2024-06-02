import { INC, RESET } from "../action/action";

// const initialState = 1;

export const counter = (state = 1, action) => {
  switch (action.type) {
    case INC:
      return (state = state + action.payload);
    case RESET:
      return (state = 0);
    default:
      return state;
  }
};

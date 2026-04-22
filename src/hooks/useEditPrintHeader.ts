import { useReducer } from "react";

type State = {
  fullName: string;
  age: string;
  sex: string;
  city: string;
};

type Action =
  | { type: "SET_FULL_NAME"; payload: string }
  | { type: "SET_AGE"; payload: string }
  | { type: "SET_SEX"; payload: string }
  | { type: "SET_CITY"; payload: string }
  | { type: "RESET_FORM" };

export const initialState: State = {
  fullName: "",
  age: "",
  sex: "",
  city: "",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_FULL_NAME":
      return { ...state, fullName: action.payload };
    case "SET_AGE":
      return { ...state, age: action.payload };
    case "SET_SEX":
      return { ...state, sex: action.payload };
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
}

export const useEditPrintHeader = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};

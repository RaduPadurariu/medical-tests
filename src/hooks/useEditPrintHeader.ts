import { HeaderDataType } from "@/types/types";
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
  | { type: "SET_CITY"; payload: string };

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
    default:
      return state;
  }
}

export const useEditPrintHeader = (initialHeaderData: HeaderDataType) => {
  const [state, dispatch] = useReducer(reducer, initialHeaderData);

  return { state, dispatch };
};

import { useReducer } from "react";

type State = {
  name: string;
  email: string;
  subject: string;
  message: string;
  isAfterSubmit: boolean;
  submitStatus: boolean;
};

type Action =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_SUBJECT"; payload: string }
  | { type: "SET_MESSAGE"; payload: string }
  | { type: "SET_IS_AFTER_SUBMIT"; payload: boolean }
  | { type: "SET_SUBMIT_STATUS"; payload: boolean };

export const initialState: State = {
  name: "",
  email: "",
  subject: "",
  message: "",
  isAfterSubmit: false,
  submitStatus: false,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_SUBJECT":
      return { ...state, subject: action.payload };
    case "SET_MESSAGE":
      return { ...state, message: action.payload };
    case "SET_IS_AFTER_SUBMIT":
      return { ...state, isAfterSubmit: action.payload };
    case "SET_SUBMIT_STATUS":
      return { ...state, submitStatus: action.payload };
    default:
      return state;
  }
}

export const useContact = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};

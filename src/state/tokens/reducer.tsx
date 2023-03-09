
import { FETCH_TOKENS } from "./actions";
export default function reducer(state = [], action: any = {}) {
    switch (action.type) {
      case FETCH_TOKENS:
        return { ...state, tokens: action.tokens };
      default:
        return state;
    }
  }
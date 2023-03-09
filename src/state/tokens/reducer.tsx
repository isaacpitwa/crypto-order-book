
import { FETCH_TOKENS, FETCHED_TOKENS } from "./actions";
import { Token } from '@/state/tokens/actions';

type Action = {
    type: string;
    tokens: Token[] ;
}
export default function reducer(state: Token[] = [], action: Action = {} as Action) {
    switch (action.type) {
      case FETCH_TOKENS:
    return { ...state, tokens: action.tokens };
    case FETCHED_TOKENS:
        return action.tokens;
      default:
    return state;
    }
  }
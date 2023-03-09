
import { SELECTION_MADE, BASE_SELECTION_MADE,QUOTE_SELECTION_MADE } from "./actions";
import { Token } from '@/state/tokens/actions';

type Action = {
    type: string;
    token: Token;
}


export default function reducer(state = {}, action: Action = {} as Action) {
    switch (action.type) {
      case SELECTION_MADE:
    return { ...state };
    case BASE_SELECTION_MADE:
        return { ...state, baseToken: action.token };
    case QUOTE_SELECTION_MADE:
    return { ...state, quoteToken: action.token };
    default:
    return state;
    }
  }

import { SELECTION_MADE, BASE_SELECTION_MADE,QUOTE_SELECTION_MADE, SELECTION_COMPLETED } from "./actions";
import { Token } from '@/state/tokens/actions';

type Action = {
    type: string;
    token: Token;
    message?: string;
    workbook?: any;
}
type ISelectionState = {
    baseToken: Token;
    quoteToken: Token;
}

export default function reducer(state = {} as ISelectionState, action: Action = {} as Action) {
    switch (action.type) {
      case SELECTION_MADE:
    return { ...state };
    case BASE_SELECTION_MADE:
        return { ...state, baseToken: action.token };
    case QUOTE_SELECTION_MADE:
    return { ...state, quoteToken: action.token };
    case SELECTION_COMPLETED:
    return { ...state, message: action.message, workbook: action.workbook };
    default:
    return state;
    }
  }

// import { SELECTION_MADE, BASE_SELECTION_MADE,QUOTE_SELECTION_MADE, SELECTION_COMPLETED, IWorkbook } from "./actions";
import { Token } from '@/redux/tokens/actions';
import { Depth } from "../../../helpers";
import { IWorkbook } from './actions';
export const  SELECTION_MADE = '/cryptoOrderBook/SELECTION_MADE';
export const  BASE_SELECTION_MADE = '/cryptoOrderBook/BASE_SELECTION_MADE';
export const  QUOTE_SELECTION_MADE = '/cryptoOrderBook/QUOTE_SELECTION_MADE';
export const  SELECTION_COMPLETED = '/cryptoOrderBook/SELECTION_COMPLETED';
export const  WEBHOOK_DATA_ADDED = '/cryptoOrderBook/WEBHOOK_DATA_ADDED';

type Action = {
    type: string;
    token: Token;
    message?: string;
    workbook?: any;
    depths: Depth[];
    bids: any[];
    asks: any[];
}
export type ISelectionState = {
    baseToken: Token | null;
    quoteToken: Token | null;
    message: string;
    workbook: IWorkbook | null;
    depths: Depth[];
    bids: any[];
    asks: any[];
}

const initialState: ISelectionState ={
    baseToken: null,
    quoteToken: null,
    message: 'Select Tokens to continue',
    workbook: null,
    depths: [],
    bids: [],
    asks: [],
}
export default function reducer(state = initialState, action: Action = {} as Action) {
    switch (action.type) {
      case SELECTION_MADE:
    return { ...state } as ISelectionState;
    case BASE_SELECTION_MADE:
        return { ...state, baseToken: action.token } as ISelectionState;
    case QUOTE_SELECTION_MADE:
    return { ...state, quoteToken: action.token } as ISelectionState;
    case SELECTION_COMPLETED:
    return { ...state, message: action.message, workbook: action.workbook, depths: action.depths, asks:action.asks, bids:action.bids } as ISelectionState;
    default:
    return state as ISelectionState;
    }
  }

// import { SELECTION_MADE, BASE_SELECTION_MADE,QUOTE_SELECTION_MADE, SELECTION_COMPLETED, IWorkbook } from "./actions";
import { Token } from '@/state/tokens/actions';
import { Depth } from "@/utils";
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
    baseToken: Token;
    quoteToken: Token;
    message: string;
    workbook: IWorkbook;
    depths: Depth[];
    bids: any[];
    asks: any[];
}

export default function reducer(state = {} as ISelectionState, action: Action = {} as Action) {
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
import { Token } from "../tokens/actions";
import store from '../store';
import apiClient from "@/data/apiClient";
import { Depth } from "../../../helpers";
export const SELECTION_MADE = '/cryptoOrderBook/SELECTION_MADE';
export const BASE_SELECTION_MADE = '/cryptoOrderBook/BASE_SELECTION_MADE';
export const QUOTE_SELECTION_MADE = '/cryptoOrderBook/QUOTE_SELECTION_MADE';
export const SELECTION_COMPLETED = '/cryptoOrderBook/SELECTION_COMPLETED';
export const WEBSOCKET_DATA_ADDED = '/cryptoOrderBook/WEBSOCKET_DATA_ADDED';


export type IWorkbook = {
  bids: IWorkbookResponse;
  asks: IWorkbookResponse;
}

export type IWorkbookResponse = {
  total: number;
  page: number;
  perPage: number;
  records: any[];
}


const handleBaseTokenSelection = (token: Token) => ({
  type: BASE_SELECTION_MADE,
  token,
})

const handleQuoteTokenSelection = (token: Token) => ({
  type: QUOTE_SELECTION_MADE,
  token,
});


const handleWorkbook = (message: string, depths: Depth[], workbook: IWorkbookResponse) => ({
  type: SELECTION_COMPLETED,
  token: null,
  workbook,
  message,
  depths,
})

const handleUpdates = (message: string | null, bids: any[], asks: any) => ({
  type: SELECTION_COMPLETED,
  bids,
  asks,
  message,
})



export const addExistingState = (payload: any) => {
  const rawBids: any[] = payload.bids;
  const rawAsks: any[] = payload.asks;
  const bids: any[] = []
  const asks: any[] = []
  return ({
    type: WEBSOCKET_DATA_ADDED,
  })
}
const handleSelectionCompleted = () => async (dispatch: any) => {
  const { selection } = store.getState();
  if (selection.baseToken && selection.quoteToken) {
    const workbook = await apiClient.fetchWorkbooks(selection.baseToken.address, selection.quoteToken.address);
    const bids = addTotalSums(workbook.bids.records);
    const maxTotalBids = getMaxTotalSum(bids);
    const updatedBids = addDepths(bids, maxTotalBids);

    const asks = addTotalSums(workbook.asks.records);
    const maxTotalAsks = getMaxTotalSum(asks);
    const updatedAsks = addDepths(asks, maxTotalAsks);
    dispatch(handleUpdates(null, updatedBids, updatedAsks));
  }
  else {
    const message: string = selection.baseToken ? 'Select base token' : 'Select quote token';
    dispatch(handleWorkbook(message, [] as Depth[], {} as IWorkbookResponse));
  }
}

const addTotalSums = (orders: any[]): any[] => {
  const totalSums: number[] = [];
  return orders.map((orderX: any, idx) => {
    const order = orderX.order;
    const total: number = order.takerAmount;
    if (typeof order.total !== 'undefined') {
      return order;
    } else {
      const updatedLevel = { ...order };
      const totalSum: number = idx === 0 ? total : parseInt(total.toString()) + parseInt(totalSums[idx - 1].toString());
      updatedLevel.total = totalSum;
      totalSums.push(totalSum);
      return updatedLevel;
    }
  });
}
const addDepths = (orders: any[], maxTotal: number): any[] => {
  return orders.map(order => {
    if (typeof order.depth !== 'undefined') {
      return order;
    } else {
      const calculatedTotal: number = order.total;
      const depth = (calculatedTotal / maxTotal) * 100;
      const updatedOrder = { ...order };
      updatedOrder.depth = depth;
      return updatedOrder;
    }
  });
};

const getMaxTotalSum = (orders: any[]): number => {
  console.log("Log", orders[0])
  const totalSums: number[] = orders.map(order => order.total);
  return Math.max.apply(Math, totalSums);
}
export const handleSelection = (level: string, token: Token) => async (dispatch: any) => {
  if (level === 'base') {
    dispatch(handleBaseTokenSelection(token));
  }
  if (level === 'quote') {
    dispatch(handleQuoteTokenSelection(token));
  }
  dispatch(handleSelectionCompleted());
};
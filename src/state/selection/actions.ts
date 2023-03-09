import  { Token }  from "../tokens/actions";
import store from '../store';
import apiClient from "@/data/apiClient";
export const  SELECTION_MADE = '/cryptoOrderBook/SELECTION_MADE';
export const  BASE_SELECTION_MADE = '/cryptoOrderBook/BASE_SELECTION_MADE';
export const  QUOTE_SELECTION_MADE = '/cryptoOrderBook/QUOTE_SELECTION_MADE';
export const  SELECTION_COMPLETED = '/cryptoOrderBook/SELECTION_COMPLETED';


type IWorkbook = {
    bids: any[];
    asks: any[];
}

const handleBaseTokenSelection = (token: Token) => ({
    type: BASE_SELECTION_MADE,
    token,
})

const handleQuoteTokenSelection = (token: Token) => ({
    type: QUOTE_SELECTION_MADE,
    token,
});


const handleWorkbook = (message:string,workbook:IWorkbook) =>({
    type: SELECTION_COMPLETED,
    token: null,
    workbook,
    message,
    
})

const handleSelectionCompleted = () => async (dispatch: any) => {
    const {selection} = store.getState();
    if(selection.baseToken && selection.quoteToken){
       const workbook = await apiClient.fetchWorkbooks(selection.baseToken.address,selection.quoteToken.address);
       dispatch(handleWorkbook('', workbook))
    }
    else{
        const message:string =  selection.baseToken ? 'Select base token' : 'Select quote token';
        dispatch(handleWorkbook(message, {} as IWorkbook));
    }
}
export const handleSelection = (level:string,token: Token) => async (dispatch:any) => {
    if(level === 'base'){
        dispatch(handleBaseTokenSelection(token));
    }
    if(level === 'quote'){
        dispatch(handleQuoteTokenSelection(token));
    }
    dispatch(handleSelectionCompleted());
};
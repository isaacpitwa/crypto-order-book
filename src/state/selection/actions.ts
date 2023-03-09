import  { Token }  from "../tokens/actions";
export const  SELECTION_MADE = '/cryptoOrderBook/SELECTION_MADE';
export const  BASE_SELECTION_MADE = '/cryptoOrderBook/BASE_SELECTION_MADE';
export const  QUOTE_SELECTION_MADE = '/cryptoOrderBook/QUOTE_SELECTION_MADE';


const handleBaseTokenSelection = (token: Token) => ({
    type: BASE_SELECTION_MADE,
    token,
})

const handleQuoteTokenSelection = (token: Token) => ({
    type: QUOTE_SELECTION_MADE,
    token,
});

export const handleSelection = (level:string,token: Token) => async (dispatch:any) => {
    if(level === 'base'){
        dispatch(handleBaseTokenSelection(token));
    }
    if(level === 'quote'){
        dispatch(handleQuoteTokenSelection(token));
    }
};
export const  FETCH_TOKENS = '/cryptoOrderBook/FETCH_TOKENS';
export const  FETCHED_TOKENS = '/cryptoOrderBook/FETCHED_TOKENS';
import ApiClient from '../../data/apiClient';

export type Token ={
    address:string,
    decimals:number,
    name:string,
    symbol:string,
    logoURI:string,
}


export  function fetchedTokens(apiResponse:any) {
    return {
      type: FETCHED_TOKENS,
      tokens: apiResponse.tokens,
    };
  }

export const fetchTokens = () => async (dispatch:any) => {
    const response = await ApiClient.fetchTokens();
    dispatch(fetchedTokens(response));
};
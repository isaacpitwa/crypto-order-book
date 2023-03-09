class ApiClient {
    private tokensAPI:string = 'https://tokens.1inch.eth.limo';
    private workbooksAPI:string = 'https://api.0x.org/orderbook/v1';
    fetchTokens = async () => {
      const response = await fetch(this.tokensAPI, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      const responseData = await response.json();
      return responseData;
    };

    fetchWorkbooks = async (baseToken:string,quoteToken:string) => {
      const response = await fetch(`${this.workbooksAPI}?baseToken=${baseToken}&quoteToken=${quoteToken}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      const responseData = await response.json();
      return responseData;
    };
}
const apiClient = new ApiClient();
export default apiClient;

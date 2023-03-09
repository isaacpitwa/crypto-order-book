class ApiClient {
    private tokensAPI:string = 'https://tokens.1inch.eth.limo';
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
}
const apiClient = new ApiClient();
export default apiClient;

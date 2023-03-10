
interface Order {
    order:{ makerAmount: string; takerAmount: string;}
  }
  
  interface OrderBook {
    bids: { records: Order[] };
    asks: { records: Order[] };
  }
  
 export interface Depth {
    price: string;
    bidsTotal: string;
    asksTotal: string;
}
export function calculateDepth(orderBook: OrderBook, precision: number): Depth[] {
    const depth: Depth[] = [];
    const precisionMultiplier = 10 ** precision;
  
    // Calculate bids depth
    const bids = orderBook.bids.records.sort((a, b) =>
      Number(a.order.makerAmount) < Number(b.order.makerAmount) ? 1 : -1
    );
    let bidsTotal = BigInt(0);
    for (const bid of bids) {
      bidsTotal += BigInt(bid.order.makerAmount);
      const price = Math.floor(Number(bid.order.takerAmount) / Number(bid.order.makerAmount) * precisionMultiplier) / precisionMultiplier;
      const depthIndex = depth.findIndex((d) => d.price === price.toString());
      if (depthIndex === -1) {
        depth.push({ price: price.toString(), bidsTotal: bidsTotal.toString(), asksTotal: "0" });
      } else {
        depth[depthIndex].bidsTotal = bidsTotal.toString();
      }
    }
  
    // Calculate asks depth
    const asks = orderBook.asks.records.sort((a, b) =>
      Number(a.order.makerAmount) < Number(b.order.makerAmount) ? 1 : -1
    );
    let asksTotal = BigInt(0);
    for (const ask of asks) {
      asksTotal += BigInt(ask.order.makerAmount);
      const price = Math.ceil(Number(ask.order.takerAmount) / Number(ask.order.makerAmount) * precisionMultiplier) / precisionMultiplier;
      const depthIndex = depth.findIndex((d) => d.price === price.toString());
      if (depthIndex === -1) {
        depth.push({ price: price.toString(), bidsTotal: "0", asksTotal: asksTotal.toString() });
      } else {
        depth[depthIndex].asksTotal = asksTotal.toString();
      }
    }
  
    return depth.sort((a, b) => Number(a.price) > Number(b.price) ? 1 : -1);
  }
  export  const formatPrice = (arg: number): string => {
    return arg.toLocaleString("en", { useGrouping: true, minimumFractionDigits: 2, maximumFractionDigits: 8 })
  };
export const formatNumber = (arg: number): string => {
    return new Intl.NumberFormat('en-US').format(arg);
};

interface Order {
    order: { makerAmount: string; takerAmount: string; }
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
export const formatPrice = (arg: number): string => {
    return arg.toLocaleString("en", { useGrouping: true, minimumFractionDigits: 2, maximumFractionDigits: 8 })
};
export const formatNumber = (arg: number): string => {
    return new Intl.NumberFormat('en-US').format(arg);
};
export const getFlag = (locale: string | undefined): string => {
    if (locale === 'de') return '🇩🇪';
    return '🇺🇸';
}
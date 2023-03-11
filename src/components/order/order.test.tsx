import { formatNumber } from '../../utils';
import { Table, Tbody } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import { Order } from './order';

const bitOrder = {
    sender: "0x0000000000000000000000000000000000000000",
    maker: "0x25b15c491255f7fcb1a615ee6341fd514c9880a3",
    taker: "0x0000000000000000000000000000000000000000",
    takerTokenFeeAmount: "48512289000000000",
    makerAmount: 50000000000,
    takerAmount: 32341526000000000000,
    makerToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    takerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    salt: "1678314697",
    verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
    feeRecipient: "0x9b858be6e3047d88820f439b240deac2418a2551",
    expiry: "1678919497",
    chainId: 1,
    pool: "0x0000000000000000000000000000000000000000000000000000000000000000",
    total: 32341526000000000000,
    depth: 5.417642820288089
}
test('renders Bid Order Price', () => {
    render(<Table>
        <Tbody>
            <Order
                type='bid'
                order={bitOrder}
            />
        </Tbody>
    </Table>);
    const price = (bitOrder.makerAmount / bitOrder.takerAmount).toFixed(12)
    const priceElement = screen.getByTestId('order-price');
    expect(priceElement.textContent).toBe(price.toString());
});

test('renders Bid Order total', () => {
    render(<Table>
        <Tbody>
            <Order
                type='bid'
                order={bitOrder}
            />
        </Tbody>
    </Table>);
    const total = formatNumber(bitOrder.total)
    const totalElement = screen.getByTestId('order-total');
    expect(totalElement.textContent).toBe(total);
});

test('renders Bid Order size', () => {
    render(<Table>
        <Tbody>
            <Order
                type='bid'
                order={bitOrder}
            />
        </Tbody>
    </Table>);
    const size = formatNumber(bitOrder.takerAmount)
    const sizeElement = screen.getByTestId('order-size');
    expect(sizeElement.textContent).toBe(size);
});
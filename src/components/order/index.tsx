import * as React from 'react';
import { uid } from 'uid';
import { Td,Tr,useColorMode } from '@chakra-ui/react';
import {formatNumber } from '../../../helpers';

type Props = {
    order: any,
    type: 'bid'| 'ask',
};
const DepthVisualizerColors = {
    DARK_BIDS: "#113534",
    DARK_ASKS: "#3d1e28",
    LIGHT_BIDS: "#CEEDC7",
    LIGHT_ASKS: "#A25B5B"
  };

export const Order = (props: Props) => {
    const {order, type } = props;
    const isBid = type === 'bid';
    const size: string = formatNumber(order.takerAmount);
    const price = (order.makerAmount/order.takerAmount).toFixed(12);
    const total: string = formatNumber(order.total);
    const { colorMode } = useColorMode();

    return (
        <Tr key={uid()} color={isBid? 'green.400':'red.400'}
        style={{
            position: "relative",
            zIndex: 1,
          }}  border='0'>
                <Td  zIndex='1' fontSize='xs'  data-testid='order-price'>{price}</Td>
                <Td zIndex='1' fontSize='xs' data-testid='order-size'>{size}</Td>
                <Td zIndex='1' fontSize='xs' data-testid='order-total'>{total}</Td>
                <Td
                style={{
                    backgroundColor: `${isBid ? colorMode === 'light' ? DepthVisualizerColors.LIGHT_BIDS: DepthVisualizerColors.DARK_BIDS  :colorMode === 'light' ? DepthVisualizerColors.LIGHT_ASKS:DepthVisualizerColors.DARK_ASKS}`,
                    height: "3.3em",
                    width: `${order.depth}%`,
                    position: "absolute",
                    top: 21,
                    marginTop: -24,
                    zIndex: -1,
                    right: isBid ?0: 'unset',
                    left: isBid ? 'unset': 0,
                }}/>
        </Tr>
    );
};

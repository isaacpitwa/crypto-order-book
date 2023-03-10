// @flow
import { IWorkbookResponse } from '@/state/selection/actions';
import { Flex, HStack, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { uid } from 'uid';
import * as React from 'react';
import { useAppSelector } from '@/hooks/hooks';
import { Order } from './order';
import { Depth } from '@/utils';
type Props = {
  type: 'bid' | 'ask';
  data: any[];
  depths: Depth[];
};
export function Orderbook(props: Props) {
  const {type, data, depths} = props;
  const {quoteToken} = useAppSelector((state) => state.selection);
  return (
    <Table w='50%' >
        <Thead>
            <Tr>
                <Th>Price ({quoteToken?.symbol})</Th>
                <Th>Quantity ({quoteToken?.symbol})</Th>
                <Th>Total ({quoteToken?.symbol})</Th>
            </Tr>
        </Thead>
        <Tbody>
          {
            data?.map((order: any) => {
              return (
                <Order 
                  key={uid()}
                  order={order}
                  type={type}
                />
            )
              })
           }
        </Tbody>
    </Table>
  );
};
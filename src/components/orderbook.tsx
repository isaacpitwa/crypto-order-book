// @flow
import { Flex, HStack, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import * as React from 'react';
type Props = {
  type: 'buy' | 'sell';
};
export function Orderbook(props: Props) {
  return (
    <Table>
        <Thead>
            <Tr>
                <Th>Price(USD)</Th>
                <Th>Quantity(USD)</Th>
                <Th>Total</Th>
            </Tr>
        </Thead>
        <Tbody>
            <Tr>
                <Td>23,376.00</Td>
                <Td>5,684</Td>
                <Td>5,684</Td>
            </Tr>
            <Tr>
                <Td>23,376.00</Td>
                <Td>5,684</Td>
                <Td>5,684</Td>
            </Tr>
            <Tr>
                <Td>23,376.00</Td>
                <Td>5,684</Td>
                <Td>5,684</Td>
            </Tr>
            <Tr>
                <Td>23,376.00</Td>
                <Td>5,684</Td>
                <Td>5,684</Td>
            </Tr>
            <Tr>
                <Td>23,376.00</Td>
                <Td>5,684</Td>
                <Td>5,684</Td>
            </Tr>
            <Tr>
                <Td>23,376.00</Td>
                <Td>5,684</Td>
                <Td>5,684</Td>
            </Tr>
            <Tr>
                <Td>23,376.00</Td>
                <Td>5,684</Td>
                <Td>5,684</Td>
            </Tr>
            <Tr>
                <Td>23,376.00</Td>
                <Td>5,684</Td>
                <Td>5,684</Td>
            </Tr>
            <Tr>
                <Td>23,376.00</Td>
                <Td>5,684</Td>
                <Td>5,684</Td>
            </Tr>
            <Tr>
                <Td>23,376.00</Td>
                <Td>5,684</Td>
                <Td>5,684</Td>
            </Tr>
            <Tr>
                <Td>23,376.00</Td>
                <Td>5,684</Td>
                <Td>5,684</Td>
            </Tr>

            <Tr>
                <Td>23,376.00</Td>
                <Td>5,684</Td>
                <Td>5,684</Td>
            </Tr>
            <Tr>
                <Td>23,376.00</Td>
                <Td>5,684</Td>
                <Td>5,684</Td>
            </Tr>

            <Tr>
                <Td>23,376.00</Td>
                <Td>5,684</Td>
                <Td>5,684</Td>
            </Tr>
            <Tr>
                <Td>23,376.00</Td>
                <Td>5,684</Td>
                <Td>5,684</Td>
            </Tr>

            <Tr>
                <Td>23,376.00</Td>
                <Td>5,684</Td>
                <Td>5,684</Td>
            </Tr><Tr>
                <Td>23,376.00</Td>
                <Td>5,684</Td>
                <Td>5,684</Td>
            </Tr>

            <Tr>
                <Td>23,376.00</Td>
                <Td>5,684</Td>
                <Td>5,684</Td>
            </Tr>
        </Tbody>
    </Table>
  );
};
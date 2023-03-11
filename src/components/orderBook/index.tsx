// @flow
import { Flex, HStack, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { uid } from 'uid';
import * as React from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { Order } from '../order';
import { Depth } from '../../../helpers';
import { useTranslations } from 'next-intl';
type Props = {
  type: 'bid' | 'ask';
  data: any[];
  depths: Depth[];
};
export function Orderbook(props: Props) {
  const {type, data, depths} = props;
  const {quoteToken} = useAppSelector((state) => state.selection);
  const t = useTranslations('Orderbook');

  return (
    <Table w={{lg:'50%',base:'100%'}} overflowY='scroll'>
        <Thead>
            <Tr>
                <Th whiteSpace='nowrap'>{t('price')} ({quoteToken?.symbol})</Th>
                <Th whiteSpace='nowrap'>{t('quantity')} ({quoteToken?.symbol})</Th>
                <Th whiteSpace='nowrap'>{t('total')} ({quoteToken?.symbol})</Th>
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
export default Orderbook;
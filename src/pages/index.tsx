import { GetStaticPropsContext } from 'next';
import Header from '@/components/header'
import { Orderbook } from '@/components/orderBook'
import Selector from '@/components/selector'
import { Box, Card, Flex, HStack,Tabs, TabList, TabPanels, Tab, TabPanel, Stack, Text, Heading } from '@chakra-ui/react'
import Head from 'next/head'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { useEffect } from 'react'
import { fetchTokens } from '@/redux/tokens/actions'
import useWebSocket from 'react-use-websocket';
import apiClient from '@/data/apiClient'
import { addExistingState } from '@/redux/selection/actions'
import { useTranslations } from 'next-intl';


export default function Home() {
  const dispatch = useAppDispatch();
  const selection = useAppSelector((state) => state.selection);
  const t = useTranslations('Base');

  const { sendJsonMessage, getWebSocket } = useWebSocket(apiClient.websocketURL(selection?.baseToken?.address,selection?.quoteToken?.address), {
    onOpen: () => console.log('WebSocket connection opened.'),
    onClose: () => console.log('WebSocket connection closed.'),
    shouldReconnect: (closeEvent) => true,
    onMessage: (event: WebSocketEventMap['message']) =>  processMessages(event)
  });

  const processMessages = (event: { data: string; }) => {
    const response: any  = JSON.parse(event.data);
    console.log("Websocket Response: ", response );
    if (response.numLevels) {
      dispatch(addExistingState(response));
    } else {
      process(response);
    }
  };

  const process = (data: any) => {
    console.log("Data for processing: ", data);
  };

  useEffect(() => {
    dispatch(fetchTokens());
  }, [dispatch]);
  
  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Stack minH='100vh' overflow='scroll'>
            <Header/>
              <Flex p={16} justifyContent='space-around' overflow={{base:'scroll', lg:'hidden'}} direction={{base:'column-reverse', lg:'row'}}  h='100vh'>
              {selection.message !=null ? <Text>{selection.message}</Text>: (<Box pt={{base:4,lg:'0'}}>
                    <Heading size='sm'>{selection?.baseToken?.symbol ?? '_'}/{selection?.quoteToken?.symbol?? '_'}</Heading>
                    <Flex  alignItems='flex-start' direction={{lg:'row',base:'column'}} overflowY='scroll'>
                        <Orderbook type='bid' data={selection?.bids} depths={ selection?.depths}/>
                        <Orderbook type='ask' data={selection?.asks} depths={ selection?.depths}/>
                    </Flex>
                  </Box>)}
                  <Selector/>
              </Flex>
          </Stack>
      </main>
    </>
  )
}

export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}

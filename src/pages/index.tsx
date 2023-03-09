import Header from '@/components/header'
import { Orderbook } from '@/components/orderbook'
import Selector from '@/components/selector'
import { Box, Card, Flex, HStack,Tabs, TabList, TabPanels, Tab, TabPanel, Stack, Text, Heading } from '@chakra-ui/react'
import Head from 'next/head'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { useEffect } from 'react'
import { fetchTokens } from '@/state/tokens/actions'

export default function Home() {
  const dispatch = useAppDispatch();
  const selection = useAppSelector((state) => state.selection);
  useEffect(() => {
    dispatch(fetchTokens());
  }, [dispatch]);
  
  return (
    <>
      <Head>
        <title>Crypto Order Book</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Stack minH='100vh'>
            <Header/>
              <Flex p={16} justifyContent='space-around'>
                  <Box>
                    <Heading size='sm'>{selection?.baseToken?.symbol ?? '_'}/{selection?.quoteToken?.symbol?? '_'}</Heading>
                    <HStack>
                      <Orderbook type='bid'/>
                      <Orderbook type='ask'/>
                    </HStack>
                  </Box>
                  <Selector/>
              </Flex>
          </Stack>
      </main>
    </>
  )
}

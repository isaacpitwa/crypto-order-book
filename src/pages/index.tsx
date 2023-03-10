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
          <Stack h='100vh' overflow='hidden'>
            <Header/>
              <Flex p={16} justifyContent='space-around' overflow='hidden'>
                  <Box>
                    <Heading size='sm'>{selection?.baseToken?.symbol ?? '_'}/{selection?.quoteToken?.symbol?? '_'}</Heading>
                    <HStack  alignItems='flex-start' overflow='scroll'>
                        <Orderbook type='bid' data={selection?.bids} depths={ selection?.depths}/>
                        <Orderbook type='ask' data={selection?.asks} depths={ selection?.depths}/>
                    </HStack>
                  </Box>
                  <Selector/>
              </Flex>
          </Stack>
      </main>
    </>
  )
}

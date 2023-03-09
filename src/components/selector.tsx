import React from 'react';
import { Box, Card, Input, Stack,Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { TokenInput } from './input';
import { useAppSelector } from '../hooks/hooks';
const Selector = () => {

    return (
        <Card w='20vw' maxH='280px'>
            <Tabs>
                <TabList>
                    <Tab>Market</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <TokenInput label='You Pay' level='base' />
                        <TokenInput  label='You Recieve' level='quote'/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Card>
    );
};

export default Selector;
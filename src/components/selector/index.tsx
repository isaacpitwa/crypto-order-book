import React from 'react';
import { Box, Card, Input, Stack,Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { TokenInput } from './input';
import { useTranslations } from 'next-intl';
const Selector = () => {
    const t = useTranslations('Selector');

    return (
        <Card w='20%' maxH='280px'>
            <Tabs>
                <TabList>
                    <Tab>{t('market')}</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <TokenInput label={t('youPay')} level='base' />
                        <TokenInput  label={t('youGet')} level='quote'/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Card>
    );
};

export default Selector;
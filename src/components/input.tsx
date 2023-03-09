// @flow 
import * as React from 'react';
import { Box, Card, Stack,Tabs, TabList, TabPanels, Tab, TabPanel, Center, FormLabel,Button,  Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    List,
    ListIcon,
    ListItem,
    Input, } from '@chakra-ui/react'
import { ChevronDownIcon} from '@chakra-ui/icons'
import { TbCurrencyEthereum } from 'react-icons/tb'

type Props = {
    label: string;
    tokens: string[];
    level: 'base'| 'quote';
};
export const TokenInput = (props: Props) => {
    const { label, tokens, level } = props
    return (
        <Stack my="4">
        <FormLabel>{label}</FormLabel>
        <Popover>
            <PopoverTrigger>
                <Button rightIcon={<ChevronDownIcon/>}>Choose Token</Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverHeader>
                    Choose {level} Token
                </PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                <Input type="text" placeholder="Search"  my={2} size='sm'/>
                    <List spacing={3} my='2' >
                        <ListItem >
                            <ListIcon as={TbCurrencyEthereum} color='green.500' fontSize='lg' />
                            ETH/USD
                        </ListItem>
                        <ListItem >
                            <ListIcon as={TbCurrencyEthereum} color='green.500' fontSize='lg' />
                            ETH/USDT
                        </ListItem>
                        <ListItem >
                            <ListIcon as={TbCurrencyEthereum} color='green.500' fontSize='lg' />
                            BTC/USDT
                        </ListItem>
                    </List>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    </Stack>
    );
};
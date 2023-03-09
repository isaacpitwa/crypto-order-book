// @flow 
import * as React from 'react';
import { Box, Card, Stack,Image, Text, TabPanels, Tab, TabPanel, Center, FormLabel,Button,  Popover,
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
    Input,
    HStack, } from '@chakra-ui/react'
import { ChevronDownIcon} from '@chakra-ui/icons'

import { useAppSelector } from '@/hooks/hooks';

type Props = {
    label: string;
    level: 'base'| 'quote';
};
export const TokenInput = (props: Props) => {
    const { label,level } = props
    const tokens = useAppSelector((state) => state.tokens);

    return (
        <Stack my="4">
        <FormLabel>{label}</FormLabel>
        <Popover >
            <PopoverTrigger>
                <Button rightIcon={<ChevronDownIcon/>}>Choose Token</Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverHeader>
                    Choose {level} Token
                </PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody maxH='300px' overflow='scroll'>
                <PopoverArrow/>
                <Input type="text" placeholder="Search"  my={2} size='sm'/>
                    <List spacing={3} my='2' >

                        {   tokens.map((token) => (
                                <ListItem key={token.address} >
                                    <HStack>
                                        <Image src={token.logoURI} alt={token.name} boxSize="40px" objectFit="cover" />
                                        <Text> {token.name}</Text> - 
                                        <Text> {'-  '+token.symbol}</Text>
                                    </HStack>                                
                            </ListItem>
                            ))
                        }
                    
                    </List>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    </Stack>
    );
};
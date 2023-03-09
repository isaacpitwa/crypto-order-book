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
    useDisclosure,
    ListItem,
    Input,
    HStack, } from '@chakra-ui/react'
import { ChevronDownIcon} from '@chakra-ui/icons'

import { useAppSelector,useAppDispatch } from '@/hooks/hooks';
import { Token } from '@/state/tokens/actions';
import { SELECTION_MADE } from '@/state/selection/actions';
import { handleSelection } from '@/state/selection/actions';
type Props = {
    label: string;
    level: 'base'| 'quote';
};

export const TokenInput = (props: Props) => {
    const { label,level } = props
    const {tokens, selection } = useAppSelector((state) => state);
    const dispatch = useAppDispatch();
    const { isOpen, onToggle, onClose } = useDisclosure()

    const handleSelectAction = (token: Token)=> {
        dispatch(handleSelection(level,token));
        onToggle();
    }
    return (
        <Stack my="4">
        <FormLabel>{label}</FormLabel>
        <Popover 
        isOpen={isOpen}
        onClose={onClose}>
            <PopoverTrigger>
                <Button rightIcon={<ChevronDownIcon/>} onClick={onToggle}> { selection?.baseToken?.symbol ?? `Choose ${level} Token`}</Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverHeader>
                    {`Choose ${level} Token`}
                </PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody maxH='300px' overflow='scroll'>
                <PopoverArrow/>
                <Input type="text" placeholder="Search"  my={2} size='sm'/>
                    <List spacing={3} my='2' >

                        {   tokens.map((token: Token) => (
                            <ListItem key={token.address} px='2' py='1'
                            _hover={{
                                border: '1px solid #000',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                            onClick={(e)=>{handleSelectAction(token)}}>
                                    <HStack >
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
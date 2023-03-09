import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
 return (
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} w='100%'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
          <Box>Crypto Order Book</Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
  );
}
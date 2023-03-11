import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
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
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { getFlag } from '../../../helpers';


export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const {locale, locales, route} = useRouter();
  const otherLocale = locales?.find((cur) => cur !== locale);
  const t = useTranslations('Base');


 return (
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} w='100%'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
          <Box>{t('title')}</Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7} alignItems='center'>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Link href={route} locale={otherLocale}>
                {getFlag(otherLocale)} {otherLocale}
              </Link>
            </Stack>
          </Flex>
        </Flex>
      </Box>
  );
}
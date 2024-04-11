import {Box, Flex, Heading, HStack, useColorModeValue} from '@chakra-ui/react'
import React from "react";
import UserBtn from "./UserBtn";


interface Props {
  children: React.ReactNode,
  href: string
}

const Links = ['Home', 'Login']

const NavLink = (props: Props) => {
  const {children, href} = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'/' + href}
    >
      {children}
    </Box>
  )
}

export default function Navbar() {
  return (
    <>
      <Box
        px={4}
        pos='fixed'
        w='100%'
        zIndex={200}
        backgroundColor={useColorModeValue('gray.100', 'gray.900')}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack alignItems={'center'}>
            <Flex flexDir='row' w='15vh'>
              <Heading size='md'> Datacenter </Heading>
            </Flex>

            <Box h='4rem' w='1px' backgroundColor={useColorModeValue('black', 'gray.400')}/>

            <HStack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link} href={link.toLowerCase()}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <UserBtn/>
        </Flex>
      </Box>
    </>
  )
}
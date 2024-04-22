import {Box, Flex, Heading, HStack, useColorModeValue} from '@chakra-ui/react'
import React from "react";
import UserBtn from "./UserBtn";
import {RiDatabaseLine} from "react-icons/ri";


interface Props {
  children: React.ReactNode,
  href: string
  isActive: boolean,
}

const Links = ['Home', 'Dashboard']

const NavLink = (props: Props) => {
  const {children, href, isActive} = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      border={isActive ? 'solid green' : 'unset'}
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
  const path = window.location.pathname;

  return (
    <>
      <Box
        mb={5}
        px={4}
        w='100%'
        zIndex={200}
        backgroundColor={useColorModeValue('gray.100', 'gray.900')}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack alignItems={'center'}>
            <Flex flexDir='row' w='18vh'>
              <Heading size='md' as={Flex} flexDir='row'>
                <RiDatabaseLine
                  fontSize={30}
                  color={useColorModeValue('darkgreen','lightgreen')}
                />
                Datacenter
              </Heading>
            </Flex>

            <Box h='4rem' w='1px' backgroundColor={useColorModeValue('gray.300', 'gray.600')}/>

            <HStack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink
                  key={link}
                  href={link.toLowerCase()}
                  isActive={'/' + link.toLowerCase() === path}
                >
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <UserBtn/>
        </Flex>
      </Box>
    </>
  )
}
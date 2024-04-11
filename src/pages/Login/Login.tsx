import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack
} from "@chakra-ui/react";
import {FaRegUser} from "react-icons/fa";
import React from "react";
import PasswordInput from "../../components/PasswordInput/PasswordInput";

function Login() {

  return (
    <>
      <Flex
        h='100vh'
        justifyContent='center'
        alignItems='center'
        flexDir='column'
      >

        <Card align='center' size='lg' maxW='lg'>
          <CardHeader textAlign='center' pb={0}>
            <Heading size='2xl'> Datacenter login</Heading>
            <Text fontSize='xl' color='gray.400'>
              Any unauthorized access will be logged and reported to the appropriate authorities.
            </Text>
          </CardHeader>
          <CardBody>
            <VStack spacing={3}>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <FaRegUser color='gray.300'/>
                </InputLeftElement>
                <Input type='username' placeholder='Username'/>
              </InputGroup>

              <PasswordInput/>
            </VStack>
          </CardBody>
          <CardFooter pt={2}>
            <Button
              colorScheme='green'
              as="a"
              href='/dashboard'
            >
              Login
            </Button>
          </CardFooter>
        </Card>

      </Flex>
    </>
  );
}

export default Login
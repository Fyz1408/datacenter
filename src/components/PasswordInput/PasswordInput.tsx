import {Button, Input, InputGroup, InputLeftElement, InputRightElement} from "@chakra-ui/react";
import React, {useState} from "react";
import {FaKey} from "react-icons/fa";

export default function PasswordInput() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup>
      <InputLeftElement pointerEvents='none'>
        <FaKey color='gray.300'/>
      </InputLeftElement>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}
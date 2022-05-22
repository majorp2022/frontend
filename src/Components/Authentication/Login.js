import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, toast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import axios from "axios"

const Login = () => {
    const toast = useToast();
    const history = useHistory();
    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState();
    
    //for hard refreshing the page after login
    const refreshPage = () => {
      window.location.reload(true);
    }

    const handleClick = () => setShow(!show);

    // const submitHandler = () => {
    //   refreshPage();
    // }
    
    const submitHandler = async() => {
        setLoading(true);
        if (!email || !password) {
          toast({
            title: "Please Fill all the Feilds",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          setLoading(false);
          return;
        }
    
        // console.log(email, password);
        try {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
    
          const { data } = await axios.post(
            "/api/user/login",
            { email, password },
            config
          );
    
          // console.log(JSON.stringify(data));
          toast({
            title: "Login Successful",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          localStorage.setItem("userInfo", JSON.stringify(data));
          //calling refresh before history is only the working way
          refreshPage();
          
          history.push("/chats");
          setLoading(false);
          
          
          
        } catch (error) {
          toast({
            title: "Error Occured!",
            description: error.response.data.message,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "bottom",
          });
          setLoading(false);
        }
      };

  return (
    <VStack spacing="5px" color="black">
        

        <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
        
        <Input
        placeholder='Enter Your Email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)} />
        </FormControl>

        <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
        <InputGroup>
        <Input
        type={show ? "text" : "password"}
        placeholder='Enter Password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)} />
            <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                </Button>
            </InputRightElement>
        </InputGroup>
        </FormControl>

        

       

        <Button
        colorScheme="blue"
        width="100%"
        style={{marginTop: 15}}
        onClick={submitHandler}>Login</Button>

<Button
variant="solid"
        colorScheme="red"
        width="100%"
        style={{marginTop: 15}}
        onClick={() => {
            setEmail("guest@gmail.com");
            setPassword("123456");
        }}>Guest User Credentials</Button>
    </VStack>
  )
}

export default Login
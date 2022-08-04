import React from "react";
import styled from "styled-components";

import { useState } from "react";
import axios from "axios";

import {
  Button,
  Box,
  Flex,
  Input,
  FormControl,
  Text,
  Link,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [usernameRegister, setUsernameRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  //const[errorMessage, setErrorMessage]=useState("");
  let Navigate = useNavigate();
  const register = (req, res) => {
    axios
      .post("http://localhost:3001/User/register", {
        username: usernameRegister,
        password: passwordRegister,
        email: emailRegister,
      })
      .then((response) => {
        console.log(response);
        Navigate("/");
        // setErrorMessage(response.data.message);
      });
  };

  return (
    <div>
      <Flex width={"full"} alignItems={"center"} justifyContent={"center"}>
        <Box
          rounded={"lg"}
          p={"4rem"}
          width={"400px"}
          marginTop={20}
          bg={"#0987A0"}
          boxShadow={"dark-lg"}
        >
          <Box
            display={"flex"}
            textAlign={"center"}
            fontSize={30}
            fontWeight={700}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Image
              height={70}
              width={70}
              src="https://img.icons8.com/plumpy/248/000000/decentralized-network.png"
              alt="logo"
            />

            <Heading>Register</Heading>
          </Box>

          <Box my={4} textAlign="left">
            <form>
              <FormControl>
                <Input
                  bg={"white"}
                  //for="name "
                  id="name"
                  type="username"
                  placeholder="Username"
                  onChange={(event) => {
                    setUsernameRegister(event.target.value);
                  }}
                />
              </FormControl>
              <FormControl mt={4}>
                <Input
                  bg={"white"}
                  //for="email"
                  id="email"
                  type="email"
                  placeholder="Email"
                  onChange={(event) => {
                    setEmailRegister(event.target.value);
                  }}
                />
              </FormControl>
              <FormControl mt={4}>
                <Input
                  bg={"white"}
                  //for="password"
                  id="email "
                  type="password"
                  placeholder="Password"
                  onChange={(event) => {
                    setPasswordRegister(event.target.value);
                  }}
                />
              </FormControl>
              <Button
                width="full"
                mt={4}
                type="submit"
                onClick={() => register()}
              >
                Register
              </Button>
              <Text align={"center"}>
                Already a user?{" "}
                <Link href="/pages/Login/Login/" color={"white"}>
                  Login
                </Link>
              </Text>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: black;
  }
`;
// const RegisterForm=styled.div`
// background-color:#D78F66;
// margin-left:20rem;
// margin-right:20rem;
// display:flex;
// justify-content:center;
// align-items:center;
// flex-direction:column;

// input, button{
//   margin:10px;

// }

export default Register;

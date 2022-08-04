import React from "react";

import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Box,
  Flex,
  Input,
  FormControl,
  Text,
  Link,
  Heading,
  Image,
} from "@chakra-ui/react";

function LoginPage() {
  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const login = async (response) => {
    console.log("hello world");

    await axios
      .post("http://localhost:3001/User/login", {
        username: usernameLogin,
        password: passwordLogin,
        email: emailLogin,
      })
      .then((response) => {
        console.log(response);
        if (response.data.loggedIn) {
          localStorage.setItem("loggedIn", true);
          localStorage.setItem("username", response.data.username);
          window.location.href = "/";
        } else {
          window.alert(response.data.message);
        }
        console.log(response);
      });
  };

  return (
    <div>
      <Flex width={"full"} align={"center"} justifyContent={"center"}>
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
            fontSize={24}
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
            <Heading>Log in {errorMessage}</Heading>
          </Box>

          <Box my={4} textAlign="left">
            <form>
              <FormControl>
                <Input
                  bg={"white"}
                  type="username"
                  placeholder="Username"
                  onChange={(e) => {
                    setUsernameLogin(e.target.value);
                  }}
                />
              </FormControl>

              <FormControl mt={4}>
                <Input
                  bg={"white"}
                  type="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmailLogin(e.target.value);
                  }}
                />
              </FormControl>

              <FormControl mt={4}>
                <Input
                  bg={"white"}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPasswordLogin(e.target.value);
                  }}
                />
              </FormControl>

              <Button
                width="full"
                mt={4}
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  login();
                }}
              >
                Log In
              </Button>

              <Text align={"center"}>
                Dont have an account?
                <Link href="/pages/Register/Register/" color={"white"}>
                  Register here
                </Link>
              </Text>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default LoginPage;

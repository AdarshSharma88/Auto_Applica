import React from "react";
import LoginForm from "./Login";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { BiMenuAltLeft } from "react-icons/bi";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    onClose();
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <nav className="flex w-auto bg-cyan-200 text-black">
        <Button
          zIndex={"overlay"}
          pos={"sticky"}
          top={"4"}
          left={"4"}
          colorScheme="cyan"
          padding={"0"}
          w={"10"}
          h={"10"}
          borderRadius={"full"}
          onClick={onOpen}
        >
          <BiMenuAltLeft size={"20"} />
        </Button>
        <h1 className="text-center">Auto Applica</h1>
        {localStorage.getItem("authToken") ? (
          <button
            onClick={handleLogout}
            className=" mr-10 bg-cyan-400 p-2 rounded-md text-lg"
          >
            Logout
          </button>
        ) : (
          <div>
            <Link
              className=" mr-10 bg-cyan-400 p-3 rounded-md text-lg"
              to={"/login"}
            >
              Login
            </Link>
            <Link
              className=" border-2 border-cyan-500 p-2.5 rounded-md text-lg text-cyan-400"
              to={"/login"}
            >
              SignUp
            </Link>
          </div>
        )}
      </nav>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className=" bg-cyan-200" justifyContent={"center"}>
            Auto Applica
          </DrawerHeader>
          <DrawerBody className=" bg-cyan-100">
            <VStack alignItems={"center"}>
              <Button variant={"ghost"} colorScheme={"cyan"} onClick={onClose}>
                <Link to={"/"}>Home</Link>
              </Button>
              <Button variant={"ghost"} colorScheme={"cyan"} onClick={onClose}>
                <Link to={"/applicationtypes"}>Applications</Link>
              </Button>
              <Button variant={"ghost"} colorScheme={"cyan"} onClick={onClose}>
                <Link to={"/about"}>About Us</Link>
              </Button>
              <Button variant={"ghost"} colorScheme={"cyan"} onClick={onClose}>
                <Link to={"/contact"}>Contact Us</Link>
              </Button>
              <Button variant={"ghost"} colorScheme={"cyan"} onClick={onClose}>
                <Link to={"/status"}>Status</Link>
              </Button>
            </VStack>
            {localStorage.getItem("authToken") ? (
              <HStack
                pos={"absolute"}
                bottom={"10"}
                left={"0"}
                w={"full"}
                justifyContent={"space-evenly"}
              >
                <Button
                  colorScheme={"cyan"}
                  variant={"outline"}
                  onClick={handleLogout}
                >
                  <Link to={"/signup"}>Logout</Link>
                </Button>
              </HStack>
            ) : (
              <HStack
                pos={"absolute"}
                bottom={"10"}
                left={"0"}
                w={"full"}
                justifyContent={"space-evenly"}
              >
                <Button colorScheme={"cyan"} onClick={onClose}>
                  <Link to={"/login"}>Login</Link>
                </Button>
                <Button
                  colorScheme={"cyan"}
                  variant={"outline"}
                  onClick={onClose}
                >
                  <Link to={"/signup"}>SignUp</Link>
                </Button>
              </HStack>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;

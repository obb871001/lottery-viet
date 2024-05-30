import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import PublicForm from "./form/publicForm";
import NormalForm from "./form/normalForm";

const BetPanel = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* <Box as="section">
        <Flex boxShadow="base" w="100%" direction="column">
          <Tabs variant="unstyled">
            <TabList>
              <Tab w="100%" _selected={{ color: "white", bg: "primary.500" }}>
                下注
              </Tab>
            </TabList>
            <TabPanels bg="white">
              <TabPanel>
                <NormalForm />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Box> */}
      <Box as={NavLink} to="/public-lottery">
        {({ isActive }) => (
          <>
            <Button
              display={{
                base: "none",
                md: "block",
              }}
              boxShadow="base"
              fontSize="14px"
              fontWeight="400"
              htmlType="button"
              w="100%"
              bg={isActive ? "primary.500" : "white"}
              color={isActive ? "white" : "black"}
              borderRadius="0px"
              _hover={{
                bg: "primary.500",
                color: "white",
              }}
            >
              官方彩
            </Button>
            {isActive && (
              <Box p="16px" bg="white">
                <PublicForm />
              </Box>
            )}
          </>
        )}
      </Box>
      <Box as={NavLink} to="/normal-lottery">
        {({ isActive }) => (
          <>
            <Button
              display={{
                base: "none",
                md: "block",
              }}
              boxShadow="base"
              fontSize="14px"
              fontWeight="400"
              htmlType="button"
              w="100%"
              bg={isActive ? "primary.500" : "white"}
              color={isActive ? "white" : "black"}
              borderRadius="0px"
              _hover={{
                bg: "primary.500",
                color: "white",
              }}
              onClick={() => navigate("/normal-lottery")}
            >
              自開彩
            </Button>
            {isActive && (
              <Box p="16px" bg="white">
                <NormalForm />
              </Box>
            )}
          </>
        )}
      </Box>
      <Box as={NavLink} to="/lottery-result">
        {({ isActive }) => (
          <Button
            boxShad
            display={{
              base: "none",
              md: "block",
            }}
            ow="base"
            fontSize="14px"
            fontWeight="400"
            htmlType="button"
            w="100%"
            bg={isActive ? "primary.500" : "white"}
            color={isActive ? "white" : "black"}
            borderRadius="0px"
            _hover={{
              bg: "primary.500",
              color: "white",
            }}
          >
            開獎結果
          </Button>
        )}
      </Box>
      <Box as={NavLink} to="/bet-history">
        {({ isActive }) => (
          <Button
            boxShad
            display={{
              base: "none",
              md: "block",
            }}
            ow="base"
            fontSize="14px"
            fontWeight="400"
            htmlType="button"
            w="100%"
            bg={isActive ? "primary.500" : "white"}
            color={isActive ? "white" : "black"}
            borderRadius="0px"
            _hover={{
              bg: "primary.500",
              color: "white",
            }}
          >
            遊戲歷程
          </Button>
        )}
      </Box>
      <Box as={NavLink} to="/rules">
        {({ isActive }) => (
          <Button
            boxShad
            display={{
              base: "none",
              md: "block",
            }}
            ow="base"
            fontSize="14px"
            fontWeight="400"
            htmlType="button"
            w="100%"
            bg={isActive ? "primary.500" : "white"}
            color={isActive ? "white" : "black"}
            borderRadius="0px"
            _hover={{
              bg: "primary.500",
              color: "white",
            }}
          >
            規則說明
          </Button>
        )}
      </Box>
    </>
  );
};

export default BetPanel;

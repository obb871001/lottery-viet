import { Tab, TabList, Tabs } from "@chakra-ui/react";
import React from "react";

const LotteryType = () => {
  return (
    <Tabs variant="unstyled">
      <TabList gap="5px">
        <Tab
          w="100%"
          bg="gray.50"
          color="deep-gray"
          fontWeight="600"
          borderRadius="common"
          _selected={{ color: "black", bg: "gray.150" }}
        >
          包組
        </Tab>
        <Tab
          w="100%"
          bg="gray.50"
          color="deep-gray"
          fontWeight="600"
          borderRadius="common"
          _selected={{ color: "black", bg: "gray.150" }}
        >
          串連
        </Tab>{" "}
        <Tab
          w="100%"
          bg="gray.50"
          color="deep-gray"
          fontWeight="600"
          borderRadius="common"
          _selected={{ color: "black", bg: "gray.150" }}
        >
          頭尾
        </Tab>
        <Tab
          w="100%"
          bg="gray.50"
          color="deep-gray"
          fontWeight="600"
          borderRadius="common"
          _selected={{ color: "black", bg: "gray.150" }}
        >
          樂透
        </Tab>{" "}
        <Tab
          w="100%"
          bg="gray.50"
          color="deep-gray"
          fontWeight="600"
          borderRadius="common"
          _selected={{ color: "black", bg: "gray.150" }}
        >
          特別
        </Tab>
      </TabList>
    </Tabs>
  );
};

export default LotteryType;

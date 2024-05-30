import { Box, Flex, Image, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import React from "react";
import CountDown from "../../../components/countDown";
import Ball from "./ball";

const TopRecommend = () => {
  return (
    <>
      <Flex
        bg="white"
        p="15px"
        mb="20px"
        alignItems="center"
        justifyContent="space-between"
        boxShadow="base"
      >
        <Flex
          justifyContent="space-between"
          direction="column"
          alignItems="flex-start"
          h="100%"
          gap="5px"
        >
          <Text mr="12px" color="deep-gray" fontSize="0.9rem" fontWeight="400">
            開獎時間：
          </Text>{" "}
          <CountDown
            needDay
            targetTime={dayjs().add(1, "d").add(10, "m").add(17, "s")}
          />
        </Flex>
        <Flex
          justifyContent="space-between"
          direction="column"
          alignItems="center"
          h="100%"
          gap="5px"
        >
          <Text mr="12px" color="deep-gray" fontSize="0.9rem" fontWeight="400">
            雙彩號碼：#1233｜開獎日期：12/05/2024
          </Text>{" "}
          <Flex as="section" gap="5px">
            <Ball number="01" />
            <Ball number="10" />
            <Ball number="12" />
            <Ball number="20" />
            <Ball number="25" />
            <Ball number="29" />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default TopRecommend;

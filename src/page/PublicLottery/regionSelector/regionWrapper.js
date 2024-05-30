import React from "react";
import LotteryForm from "./form/lotteryForm";
import LotteryType from "./lotteryType/LotteryType";
import LotteryOptions from "./lotteryOptions/LotteryOptions";
import LotteryDescription from "./lotteryDescription/LotteryDescription";
import { Flex } from "@chakra-ui/react";

const RegionWrapper = ({ children }) => {
  return (
    <Flex direction="column" gap="15px">
      {" "}
      <LotteryForm />
      {children}
      <LotteryDescription />
    </Flex>
  );
};

export default RegionWrapper;

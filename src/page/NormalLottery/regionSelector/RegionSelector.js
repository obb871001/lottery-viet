import { Box, Flex } from "@chakra-ui/react";
import LotteryForm from "./form/lotteryForm";
import LotteryType from "./lotteryType/LotteryType";
import LotteryOptions from "./lotteryOptions/LotteryOptions";
import LotteryDescription from "./lotteryDescription/LotteryDescription";

const RegionSelector = () => {
  return (
    <Box bg="white" p="16px">
      <Flex direction="column" gap="15px">
        <LotteryForm />
        <LotteryType />
        <LotteryOptions />
        <LotteryDescription />
      </Flex>
    </Box>
  );
};

export default RegionSelector;

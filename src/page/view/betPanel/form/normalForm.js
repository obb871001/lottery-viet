import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Tag,
  Text,
} from "@chakra-ui/react";
import React from "react";

import wallet from "../../../../assets/images/demo/wallet.png";
import CustomInput from "../../../../components/CustomInput";
import { useSelector } from "react-redux";

const NormalForm = () => {
  const FORM = useSelector((state) => state.FORM);
  const { minute, lotteryNumber } = FORM?.normal || {};

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target);
        }}
      >
        <Text color="black" mb="10px" fontWeight="700">
          {minute && `${minute}`}
        </Text>
        <Box overflowX="scroll" w="100%">
          <Grid templateColumns="repeat(12, 1fr)">
            {lotteryNumber?.map((item) => {
              return (
                <GridItem>
                  <Tag
                    px="2px"
                    borderRadius="1px"
                    fontWeight="700"
                    size={"sm"}
                    key={item}
                    bg="secondary.500"
                    color="white"
                    justifyContent="center"
                  >
                    {item}
                  </Tag>
                </GridItem>
              );
            })}
          </Grid>
        </Box>
        <Flex direction="column" gap="10px">
          <CustomInput
            props={{
              type: "number",
              label: "每1條魚的投注金額 (K)",
              precision: 2,
              defaultValue: 1,
            }}
          />
          <CustomInput
            props={{
              type: "number",
              label: "總投注 (K)",
              precision: 2,
              defaultValue: 1,
            }}
          />
          <Flex
            my="10px"
            alignItems="center"
            justifyContent="space-between"
            gap="10px"
          >
            <Flex alignItems="center" gap="10px">
              <Image src={wallet} w="27px" h="27px" />
              <Text fontSize="14px" color="deep-gray">
                1個號碼的中獎金額（K）
              </Text>
            </Flex>
            <Box>
              <Text color="secondary.500">0.00 K</Text>
            </Box>
          </Flex>
          <Grid templateColumns="repeat(3, 1fr)" gap="10px">
            <GridItem colSpan={1}>
              <Button
                type="submit"
                borderRadius="common"
                bg="gray.500"
                color="white"
                w="100%"
              >
                取消
              </Button>
            </GridItem>
            <GridItem colSpan={2}>
              <Button type="submit" variant="brandPrimary" w="100%">
                下注
              </Button>
            </GridItem>
          </Grid>
        </Flex>
      </form>
    </>
  );
};

export default NormalForm;

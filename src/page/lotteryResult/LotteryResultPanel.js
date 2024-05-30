import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import { PUBLIC_LOTTERY } from "../PublicLottery/regionSelector/form/config";
import PublicSearch from "./publicSearch";
import NormalSearch from "./normalSearch";

const LotteryResultPanel = () => {
  const [lotteryType, setLotteryType] = useState("");

  return (
    <Box bg="white" p="16px">
      <Flex direction="column" gap="15px">
        <Grid templateColumns="repeat(4, 1fr)" gap="10px">
          <GridItem colSpan={2}>
            <Flex gap="10px">
              <CustomInput
                props={{
                  type: "select",
                  label: "選擇彩票類型",
                  formControlStyle: {
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  },
                  name: "lottery_type",
                  value: lotteryType,
                  placeholder: "請選擇",
                  onChange: (e) => setLotteryType(e.target.value),
                  options: [
                    { label: "官方彩", value: "public" },
                    { label: "自開彩", value: "normal" },
                  ],
                }}
              />
            </Flex>
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(4, 1fr)" gap="10px">
          <GridItem colSpan={3}>
            <Flex gap="10px">
              {lotteryType == "normal" && <NormalSearch />}
              {lotteryType == "public" && <PublicSearch />}
            </Flex>
          </GridItem>
        </Grid>
        <Divider />
        <Text>北部彩票開獎結果 2024-05-13</Text>
        <TableContainer>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td>七等獎</Td>
                <Td>63-23-34-20</Td>
              </Tr>
              <Tr>
                <Td>六等獎</Td>
                <Td>63-23-34-20</Td>
              </Tr>
              <Tr>
                <Td>五等獎</Td>
                <Td>63-23-34-20</Td>
              </Tr>
              <Tr>
                <Td>四等獎</Td>
                <Td>63-23-34-20</Td>
              </Tr>
              <Tr>
                <Td>三等獎</Td>
                <Td>63-23-34-20</Td>
              </Tr>
              <Tr>
                <Td>二等獎</Td>
                <Td>63-23-34-20</Td>
              </Tr>{" "}
              <Tr>
                <Td>一等獎</Td>
                <Td>63-23-34-20</Td>
              </Tr>{" "}
              <Tr>
                <Td>特別獎</Td>
                <Td>63-23-34-20</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Box>
  );
};

export default LotteryResultPanel;

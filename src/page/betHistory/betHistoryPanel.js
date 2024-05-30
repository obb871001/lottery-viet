import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import CustomInput from "../../components/CustomInput";

const BetHistoryPanel = () => {
  return (
    <Box bg="white" p="16px">
      <Flex direction="column" gap="15px">
        <Grid templateColumns="repeat(4, 1fr)" gap="10px">
          <GridItem colSpan={3}>
            <Flex gap="10px">
              <CustomInput
                props={{
                  type: "date",
                  label: "開始日期",
                  formControlStyle: {
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  },
                  name: "start_date",
                }}
              />

              <CustomInput
                props={{
                  type: "date",
                  label: "結束日期",
                  formControlStyle: {
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  },
                  name: "end_date",
                }}
              />
            </Flex>
          </GridItem>
        </Grid>
        <Divider />
        <TableContainer>
          <Table size="sm" variant="simple">
            <Thead>
              <Tr>
                <Th>注單號</Th>
                <Th>投注時間</Th>
                <Th>類型</Th>
                <Th>玩法</Th>
                <Th>遊戲類別</Th>
                <Th isNumeric>下注金額</Th>
                <Th isNumeric>贏/輸</Th>
                <Th>結果</Th>
                <Th>取消時間</Th>
                <Th>功能</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1232543</Td>
                <Td>02/05/2024</Td>
                <Td>D</Td>
                <Td>D</Td>
                <Td>HN</Td>
                <Td isNumeric>40</Td>
                <Td isNumeric>0</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>
                  <Flex gap="5px">
                    <Button size="sm" colorScheme="red">
                      取消
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Box>
  );
};

export default BetHistoryPanel;

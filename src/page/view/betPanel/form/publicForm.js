import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useMemo } from "react";

import wallet from "../../../../assets/images/demo/wallet.png";
import CustomInput from "../../../../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { SET_PUBLIC_FORM } from "../../../../redux/actions/action";
import { option_config } from "../../../PublicLottery/regionSelector/lotteryOptions/config";

const PublicForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();
  const FORM = useSelector((state) => state.FORM);
  const {
    date = "",
    region = "",
    area = "",
    lotteryNumber = [],
    betPerAmount = 0,
    totalBet = 0,
    lottery_type = "",
    lottery_group = "",
  } = FORM?.public || {};

  const get_lottery_data = useMemo(() => {
    const data = option_config?.[region]?.[lottery_type]?.[lottery_group] || {};
    return data;
  }, [region, lottery_type, lottery_group]);

  const { odds, multiple } = get_lottery_data || {};

  useEffect(() => {
    dispatch(
      SET_PUBLIC_FORM({
        totalBet: (betPerAmount * lotteryNumber.length * multiple).toFixed(2),
      })
    );
  }, [lotteryNumber?.length]);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target);
        }}
      >
        <Text color="black" mb="10px" fontWeight="700">
          {region} {area && `/ ${area}`} {date && `/ ${date}`}
        </Text>
        <Box overflowX="scroll" w="100%">
          <Grid templateColumns="repeat(10, 1fr)" gap="3px">
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
              name: "betPerAmount",
              value: betPerAmount,
              onChange: (v) => {
                dispatch(
                  SET_PUBLIC_FORM({
                    betPerAmount: v,
                    totalBet: v * lotteryNumber.length * multiple,
                  })
                );
              },
            }}
          />
          <CustomInput
            props={{
              type: "number",
              label: "總投注 (K)",
              precision: 2,
              value: totalBet,
              onChange: (v) => {
                dispatch(
                  SET_PUBLIC_FORM({
                    betPerAmount: (
                      v /
                      (lotteryNumber.length * multiple)
                    ).toFixed(2),
                    totalBet: v,
                  })
                );
              },
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
              <Text color="secondary.500">{odds?.toFixed(2)}</Text>
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
              <Button
                type="button"
                onClick={onOpen}
                variant="brandPrimary"
                w="100%"
              >
                下注
              </Button>
            </GridItem>
          </Grid>
        </Flex>
        <Modal isOpen={isOpen} size="md" onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>下注成功</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <TableContainer>
                <Table size="sm" variant="simple">
                  <Thead>
                    <Tr>
                      <Th>玩法</Th>
                      <Th isNumeric>金額</Th>
                      <Th isNumeric>可贏獎金</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>EX</Td>
                      <Td isNumeric>EX</Td>
                      <Td isNumeric>EX</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </ModalBody>

            <ModalFooter>
              <Button
                bg="gray.500"
                color="white"
                size="sm"
                mr={3}
                onClick={onClose}
              >
                取消
              </Button>
              <Button size="sm" variant="brandPrimary">
                提交
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </form>
    </>
  );
};

export default PublicForm;

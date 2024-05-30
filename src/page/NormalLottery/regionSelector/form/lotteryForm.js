import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import CustomInput from "../../../../components/CustomInput";
import CountDown from "../../../../components/countDown";
import dayjs from "dayjs";
import { NORMAL_LOTTERY } from "./config";
import { useDispatch, useSelector } from "react-redux";
import { SET_NORMAL_FORM } from "../../../../redux/actions/action";

const LotteryForm = () => {
  const FORM = useSelector((state) => state.FORM);
  const { minute } = FORM?.normal || {};
  const dispatch = useDispatch();

  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap="10px">
        <GridItem colSpan={3}>
          <Flex gap="10px">
            <CustomInput
              props={{
                type: "select",
                label: "分鐘",
                formControlStyle: {
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                },
                name: "minute",
                options: NORMAL_LOTTERY?.map((item) => {
                  return { value: item, label: item };
                }),
                value: minute,
                placeholder: "請選擇分鐘",
                onChange: (e) => {
                  dispatch(SET_NORMAL_FORM({ minute: e.target.value }));
                },
              }}
            />
          </Flex>
        </GridItem>

        <GridItem colSpan={1}>
          <Flex justifyContent="space-between" direction="column" h="100%">
            <Text
              mb="8px"
              mr="12px"
              color="deep-gray"
              fontSize="0.9rem"
              fontWeight="400"
            >
              開獎時間
            </Text>{" "}
            <CountDown targetTime={dayjs().add(3, "hour").add(30, "m")} />
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
};

export default LotteryForm;

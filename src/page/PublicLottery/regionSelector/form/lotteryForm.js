import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import CustomInput from "../../../../components/CustomInput";
import CountDown from "../../../../components/countDown";
import dayjs from "dayjs";
import { PUBLIC_LOTTERY } from "./config";
import { useDispatch, useSelector } from "react-redux";
import { SET_PUBLIC_FORM } from "../../../../redux/actions/action";

const LotteryForm = () => {
  const FORM = useSelector((state) => state.FORM);
  const { date, region, area } = FORM?.public || {};
  const dispatch = useDispatch();

  const filterRegion = useMemo(() => {
    return PUBLIC_LOTTERY?.[region] || [];
  }, [region, PUBLIC_LOTTERY]);

  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap="10px">
        <GridItem
          colSpan={{
            base: 4,
            md: 3,
          }}
        >
          <Flex gap="10px">
            <CustomInput
              props={{
                type: "date",
                label: "日期",
                formControlStyle: {
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                },
                name: "date",
                value: date,
                onChange: (e) => {
                  dispatch(SET_PUBLIC_FORM({ date: e.target.value }));
                },
              }}
            />
            {/* <CustomInput
              props={{
                type: "select",
                label: "縣市",
                formControlStyle: {
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                },
                name: "region",
                placeholder: "請選擇縣市",
                value: region,
                options: Object.keys(PUBLIC_LOTTERY)?.map((item) => {
                  return { value: item, label: item };
                }),
                onChange: (e) => {
                  dispatch(
                    SET_PUBLIC_FORM({ region: e.target.value, area: "" })
                  );
                },
              }}
            /> */}
            <CustomInput
              props={{
                type: "select",
                label: "區域",
                formControlStyle: {
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                },
                name: "area",
                value: area,
                placeholder: "請選擇區域",
                options: filterRegion?.map((item) => {
                  return { value: item, label: item };
                }),
                onChange: (e) => {
                  dispatch(SET_PUBLIC_FORM({ area: e.target.value }));
                },
              }}
            />
          </Flex>
        </GridItem>

        <GridItem
          colSpan={{
            base: 4,
            md: 1,
          }}
        >
          <Flex
            alignItems={{
              base: "center",
            }}
            justifyContent="space-between"
            direction="column"
            h="100%"
          >
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

import { Tab, TabList, Tabs } from "@chakra-ui/react";
import React, { useEffect, useMemo } from "react";
import { option_config } from "../lotteryOptions/config";
import { useDispatch, useSelector } from "react-redux";
import { SET_PUBLIC_FORM } from "../../../../redux/actions/action";

const LotteryType = () => {
  const dispatch = useDispatch();
  const FORM = useSelector((state) => state.FORM);
  const { region = "", lottery_type = "" } = FORM?.public || {};

  const get_region_list = useMemo(() => {
    return Object?.keys(option_config?.[region] || {});
  }, [region]);

  useEffect(() => {
    dispatch(
      SET_PUBLIC_FORM({
        lottery_type: get_region_list[0],
      })
    );
  }, [region]);

  return (
    <Tabs
      onChange={(index) => {
        dispatch(
          SET_PUBLIC_FORM({
            lottery_type: get_region_list[index],
          })
        );
      }}
      index={get_region_list?.indexOf(lottery_type || "")}
      variant="unstyled"
    >
      <TabList gap="5px">
        {get_region_list?.map((item) => {
          return (
            <Tab
              w="100%"
              bg="gray.50"
              color="deep-gray"
              fontWeight="600"
              borderRadius="common"
              _selected={{ color: "black", bg: "gray.150" }}
            >
              {item}
            </Tab>
          );
        })}
      </TabList>
    </Tabs>
  );
};

export default LotteryType;

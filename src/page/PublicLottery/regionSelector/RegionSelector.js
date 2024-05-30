import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import LotteryForm from "./form/lotteryForm";
import LotteryType from "./lotteryType/LotteryType";
import LotteryOptions from "./lotteryOptions/LotteryOptions";
import LotteryDescription from "./lotteryDescription/LotteryDescription";
import { useDispatch, useSelector } from "react-redux";
import { SET_PUBLIC_FORM } from "../../../redux/actions/action";
import { option_config } from "./lotteryOptions/config";
import { useEffect, useMemo } from "react";
import RegionWrapper from "./regionWrapper";

const RegionSelector = () => {
  const dispatch = useDispatch();
  const FORM = useSelector((state) => state.FORM);

  const { region = "" } = FORM?.public || {};

  const get_region = useMemo(() => {
    return Object?.keys(option_config || {});
  }, [option_config]);

  useEffect(() => {
    dispatch(SET_PUBLIC_FORM({ region: get_region[0] }));
  }, [get_region]);

  return (
    <>
      <Tabs
        onChange={(index) => {
          dispatch(SET_PUBLIC_FORM({ region: get_region[index] }));
        }}
        variant="unstyled"
        index={get_region?.indexOf(region) || 0}
      >
        <TabList>
          {get_region?.map((item) => {
            return (
              <Tab
                w="100%"
                bg="white"
                _selected={{ color: "white", bg: "primary.500" }}
              >
                {item}
              </Tab>
            );
          })}
        </TabList>
      </Tabs>
      <Box bg="white" p="16px">
        <Flex direction="column" gap="15px">
          <LotteryForm />
          <LotteryType />
          <LotteryOptions />
          <LotteryDescription />
        </Flex>
      </Box>
    </>
  );
};

export default RegionSelector;

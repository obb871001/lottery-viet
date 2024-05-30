import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { SET_PUBLIC_FORM } from "../../../../redux/actions/action";
import { useEffect, useMemo, useState } from "react";
import { option_config } from "./config";

const optionSelectArrowStyle = {
  position: "absolute",
  content: "''",
  display: "inline-block",
  width: 0,
  height: 0,
  borderStyle: "solid",
  borderWidth: "10px 10px 0 10px",
  borderColor: `transparent transparent transparent transparent`,
  borderTopColor: "primary.500",
  bottom: "-10px",
  left: "40%",
};

const optionStyle = {
  w: "100%",
  border: "1px solid",
  borderColor: "gray.500",
  borderRadius: "3px",
  fontSize: "14px",
  fontWeight: "500",
  _hover: {
    bg: {
      base: "",
      md: "gray.700",
    },
  },

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};

const LotteryOptions = () => {
  const toast = useToast();

  const [selectedTab, setSelectedTab] = useState("");

  const dispatch = useDispatch();
  const FORM = useSelector((state) => state.FORM);
  const {
    date = "",
    region = "",
    lottery_type = "",
    lottery_group = "",
  } = FORM?.public || {};

  const get_region_list = useMemo(() => {
    const group_list = Object?.keys(
      option_config?.[region]?.[lottery_type] || {}
    );
    const data = option_config?.[region]?.[lottery_type] || {};
    return {
      group_list,
      data,
    };
  }, [region, lottery_type]);

  const { group_list, data } = get_region_list || {};

  const option = useMemo(() => {
    const group_option = data?.[lottery_group] || {};

    const [startStr, endStr] = group_option?.options_area?.split("~") || [];
    const start = parseInt(startStr, 10);
    const end = parseInt(endStr, 10);

    const array = Array.from({ length: end - start + 1 }, (_, index) => {
      if (group_option?.dontPadStart) {
        return (start + index).toString();
      }
      return (start + index).toString().padStart(3, "0");
    });

    const groupedRanges = {};
    for (let i = 0; i < array.length; i += 100) {
      const start = i;
      const end = i + 99;
      const group = array.slice(i, i + 100);
      const key = `${String(start).padStart(3, "0")}~${String(end).padStart(
        3,
        "0"
      )}`;
      groupedRanges[key] = Array.from({ length: 100 }, (_, k) =>
        String(start + k).padStart(3, "0")
      );
    }

    return {
      optionList: array,
      groupedRanges,
      isMoreThan100: array.length > 100,
    };
  }, [data, lottery_type, lottery_group]);

  useEffect(() => {
    if (group_list?.length) {
      dispatch(
        SET_PUBLIC_FORM({ lottery_group: group_list[0], lotteryNumber: [] })
      );
    }
  }, [group_list]);

  useEffect(() => {
    if (option) {
      setSelectedTab(Object.keys(option?.groupedRanges)[0]);
    }
  }, [option]);

  console.log(option);

  return (
    <>
      <Tabs
        onChange={(index) => {
          dispatch(SET_PUBLIC_FORM({ lottery_group: group_list[index] }));
        }}
        index={group_list?.indexOf(lottery_group || "")}
        variant="unstyled"
      >
        <TabList gap="5px">
          {group_list?.map((item) => {
            return (
              <Tab
                bg="gray.600"
                color="white"
                fontWeight="500"
                borderRadius="common"
                py="5px"
                px="30px"
                fontSize="14px"
                position="relative"
                _selected={{
                  color: "white",
                  bg: "primary.500",
                  _after: optionSelectArrowStyle,
                }}
              >
                {item}
              </Tab>
            );
          })}
        </TabList>
      </Tabs>
      <Flex flexWrap="wrap">
        {option?.isMoreThan100 &&
          Object.keys(option?.groupedRanges)?.map((item) => {
            return (
              <Box
                minW="10%"
                flex="0 0 10%"
                p={{
                  base: "3px",
                  md: "5px",
                }}
              >
                <Box
                  {...optionStyle}
                  wordBreak="break-all"
                  bg={
                    FORM?.public?.lottery_group === item
                      ? "primary.500"
                      : "gray.50"
                  }
                  _hover={{
                    bg: "gray.50",
                    borderColor: "secondary.500",
                    color: "secondary.500",
                  }}
                  color={selectedTab === item ? "secondary.500" : "gray.500"}
                  borderColor={
                    selectedTab === item ? "secondary.500" : "gray.300"
                  }
                  minH={{
                    base: "22px",
                    md: "32px",
                  }}
                  py={{
                    base: "5px",
                  }}
                  fontSize="11px"
                  textAlign="center"
                  letterSpacing="tighter"
                  onClick={() => {
                    setSelectedTab(item);
                  }}
                >
                  {item}
                </Box>
              </Box>
            );
          })}
      </Flex>
      <Flex flexWrap="wrap">
        {option?.groupedRanges?.[selectedTab]?.map((index) => {
          return (
            <Box
              minW="10%"
              flex="0 0 10%"
              p={{
                base: "3px",
                md: "5px",
              }}
            >
              <Box
                onClick={() => {
                  if (!date || !region)
                    return toast({
                      title: "提示訊息",
                      description: "請選擇地區、日期、區域後再選號碼",
                      status: "warning",
                      duration: 1500,
                      isClosable: true,
                    });
                  if (FORM?.public?.lotteryNumber?.includes(index)) {
                    dispatch(
                      SET_PUBLIC_FORM({
                        lotteryNumber: FORM?.public?.lotteryNumber.filter(
                          (num) => num !== index
                        ),
                      })
                    );
                    return;
                  }
                  dispatch(
                    SET_PUBLIC_FORM({
                      lotteryNumber: [
                        ...(FORM?.public?.lotteryNumber || []),
                        index,
                      ],
                    })
                  );
                }}
                {...optionStyle}
                bg={
                  FORM?.public?.lotteryNumber?.includes(index)
                    ? "primary.500"
                    : "none"
                }
                color={
                  FORM?.public?.lotteryNumber?.includes(index)
                    ? "white"
                    : "gray.500"
                }
                minH={{
                  base: "22px",
                  md: "32px",
                }}
                py={{
                  base: "5px",
                }}
              >
                {index}
              </Box>
            </Box>
          );
        })}
      </Flex>
    </>
  );
};

export default LotteryOptions;

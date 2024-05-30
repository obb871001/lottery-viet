import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Tab,
  TabList,
  Tabs,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { SET_NORMAL_FORM } from "../../../../redux/actions/action";

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
    bg: "gray.700",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};

const LotteryOptions = () => {
  const toast = useToast();

  const dispatch = useDispatch();
  const FORM = useSelector((state) => state.FORM);
  const { minute = "", lotteryNumber = [] } = FORM?.normal || {};

  return (
    <>
      <Tabs variant="unstyled">
        <TabList gap="5px">
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
            組2
          </Tab>
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
            組3
          </Tab>{" "}
        </TabList>
      </Tabs>
      <Flex flexWrap="wrap">
        {Array.from({ length: 100 }, (_, index) => {
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
                  if (!minute)
                    return toast({
                      title: "提示訊息",
                      description: "請選擇地區、日期、區域後再選號碼",
                      status: "warning",
                      duration: 1500,
                      isClosable: true,
                    });
                  if (FORM?.normal?.lotteryNumber?.includes(index)) {
                    dispatch(
                      SET_NORMAL_FORM({
                        lotteryNumber: FORM?.normal?.lotteryNumber.filter(
                          (num) => num !== index
                        ),
                      })
                    );
                    return;
                  }
                  dispatch(
                    SET_NORMAL_FORM({
                      lotteryNumber: [
                        ...(FORM?.normal?.lotteryNumber || []),
                        index,
                      ],
                    })
                  );
                }}
                {...optionStyle}
                bg={
                  FORM?.normal?.lotteryNumber?.includes(index)
                    ? "primary.500"
                    : "none"
                }
                color={
                  FORM?.normal?.lotteryNumber?.includes(index)
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

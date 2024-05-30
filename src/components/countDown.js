import { Box, Flex, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useEffect, useState } from "react";

dayjs.extend(duration);

const timeBlockStyle = {
  background: "#666",

  borderRadius: "5px",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "600",
  height: "100%",
};

const defaultTime = dayjs().add(24, "hour");

const CountDown = ({ targetTime, needDay = false } = {}) => {
  const [remainingTime, setRemainingTime] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });
  const { day, hour, minute, second } = remainingTime || {};

  const target = targetTime || defaultTime;

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = dayjs();
      const newDuration = dayjs.duration(target.diff(currentTime));
      const formatTime = {
        day: newDuration.days(),
        hour: newDuration.hours(),
        minute: newDuration.minutes(),
        second: newDuration.seconds(),
      };
      setRemainingTime(formatTime);

      if (newDuration.asSeconds() <= 0) {
        clearInterval(timer);
        setRemainingTime({ hour: 0, minute: 0, second: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <Flex gap="3px" alignItems="flex-end">
      {needDay && (
        <>
          <Box
            style={timeBlockStyle}
            p={{
              base: "2.5px 5px",
              md: "5px 10px",
            }}
            fontSize={{
              base: "10px",
              md: "14px",
            }}
          >
            {day}
          </Box>
          <Text fontSize="11px" color="black">
            天
          </Text>
        </>
      )}
      <Box
        style={timeBlockStyle}
        p={{
          base: "2.5px 5px",
          md: "5px 10px",
        }}
        fontSize={{
          base: "10px",
          md: "14px",
        }}
      >
        {hour}
      </Box>
      <Text fontSize="11px" color="black">
        時
      </Text>
      <Box
        style={timeBlockStyle}
        p={{
          base: "2.5px 5px",
          md: "5px 10px",
        }}
        fontSize={{
          base: "10px",
          md: "14px",
        }}
      >
        {minute}
      </Box>
      <Text fontSize="11px" color="black">
        分
      </Text>
      <Box
        style={timeBlockStyle}
        p={{
          base: "2.5px 5px",
          md: "5px 10px",
        }}
        fontSize={{
          base: "10px",
          md: "14px",
        }}
      >
        {second}
      </Box>
      <Text fontSize="11px" color="black">
        秒
      </Text>
    </Flex>
  );
};

export default CountDown;

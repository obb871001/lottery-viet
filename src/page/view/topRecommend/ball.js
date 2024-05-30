import { Flex, Image, Text } from "@chakra-ui/react";

import red_ball from "../../../assets/images/demo/red-ball.png";

const Ball = ({ number = "00" } = {}) => {
  return (
    <Flex
      position="relative"
      w={{
        base: "20px",
        md: "35px",
      }}
      h={{
        base: "20px",
        md: "35px",
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Image position="absolute" src={red_ball} />
      <Text
        position="relative"
        zIndex={1}
        color="black"
        fontWeight={700}
        fontSize={{
          base: "9px",
          md: "12px",
        }}
        mt="1px"
      >
        {number}
      </Text>
    </Flex>
  );
};

export default Ball;

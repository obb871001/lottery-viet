import { Box, Flex, Image, Text } from "@chakra-ui/react";

import banner from "../../../assets/images/demo/demo_banner.jpg";
import user_avatar from "../../../assets/images/demo/user_avatar.png";

const UserPanel = () => {
  return (
    <>
      <Box as="section">
        <Image src={banner} />
      </Box>
      <Box as="section">
        <Flex
          bg="white"
          boxShadow="base"
          alignItems="center"
          gap="10px"
          p="10px"
        >
          <Box>
            <Image src={user_avatar} w="70px" h="70px" />
          </Box>
          <Box>
            <Flex direction="column" justifyContent="space-between" gap="5px">
              <Text color="secondary.500" fontWeight="700" fontSize="xl">
                UserName
              </Text>
              <Flex color="gray.500" gap="5px" fontSize="20px">
                <Text>0.00</Text>
                <Text>K</Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default UserPanel;

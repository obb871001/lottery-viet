import { Box, Divider, Flex, Icon, Image, Text } from "@chakra-ui/react";
import logo from "../assets/images/demo/logo.png";
import { HamburgerIcon, RepeatIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import user_avatar from "../assets/images/demo/user_avatar.png";
import redBall from "../assets/images/demo/red-ball.png";
import { Link, useLocation } from "react-router-dom";

const ListWrapper = ({ icon, textChildren }) => {
  return (
    <Flex alignItems="center" gap="15px">
      <Box>{icon}</Box>
      <Box>
        <Flex flexDirection="column">{textChildren}</Flex>
      </Box>
    </Flex>
  );
};

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setOpenMenu(false);
  }, [location.pathname]);
  return (
    <>
      <Box
        position="fixed"
        top="0px"
        left="0px"
        h="60px"
        w="100%"
        bg="white"
        zIndex={100}
        py="10px"
        px="10px"
        display="flex"
        alignItems="center"
        shadow="base"
      >
        <Flex w="100%" alignItems="center" justifyContent="space-between">
          <Box>
            <HamburgerIcon
              onClick={() => {
                setOpenMenu(true);
              }}
              color="primary.500"
              fontSize="25px"
            />
          </Box>
          <Box>
            <Image w="130px" src={logo} />
          </Box>{" "}
          <Box>
            <Flex alignItems="center" gap="5px">
              <Box fontSize="14px">
                <Text fontWeight="700" color="secondary.500">
                  USERNAME
                </Text>
                <Flex gap="3px" alignItems="center">
                  <Text>0.0 K</Text>
                  <RepeatIcon />
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
      {openMenu && (
        <Box
          position="fixed"
          w="100%"
          h="100%"
          top="0px"
          left="0px"
          bg="rgba(0,0,0,0.5)"
          zIndex={999999}
          onClick={() => {
            setOpenMenu(false);
          }}
        >
          <Box
            onClick={(e) => {
              e.stopPropagation();
            }}
            w="250px"
            h="100%"
            bg="white"
            p="16px"
          >
            <Flex direction="column" gap="15px">
              <ListWrapper
                icon={<Image src={user_avatar} w="28px" h="28px" />}
                textChildren={
                  <>
                    <Text>餘額</Text>
                    <Text color="secondary.500" fontWeight="600">
                      0.00 K
                    </Text>
                  </>
                }
              />
              <Divider />
              <ListWrapper
                icon={<Image src={redBall} w="28px" h="28px" />}
                textChildren={
                  <Link to="/public-lottery">
                    <Text>官方彩</Text>
                  </Link>
                }
              />
              <ListWrapper
                icon={<Image src={redBall} w="28px" h="28px" />}
                textChildren={
                  <Link to="/normal-lottery">
                    <Text>自開彩</Text>
                  </Link>
                }
              />
              <ListWrapper
                icon={<Image src={redBall} w="28px" h="28px" />}
                textChildren={
                  <Link to="/lottery-result">
                    <Text>開獎記錄</Text>
                  </Link>
                }
              />
              <ListWrapper
                icon={<Image src={redBall} w="28px" h="28px" />}
                textChildren={
                  <Link to="/bet-history">
                    <Text>遊戲歷程</Text>
                  </Link>
                }
              />
              <ListWrapper
                icon={<Image src={redBall} w="28px" h="28px" />}
                textChildren={
                  <Link to="/rules">
                    <Text>規則說明</Text>
                  </Link>
                }
              />
            </Flex>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Header;

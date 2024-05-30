import { Box, Container, Flex, Grid, GridItem } from "@chakra-ui/react";
import UserPanel from "./userPanel/UserPanel";
import BetPanel from "./betPanel/BetPanel";
import TopRecommend from "./topRecommend/TopRecommend";
import Header from "../../components/Header";

const View = ({ children }) => {
  return (
    <>
      <Container
        pt={{
          base: "80px",
          md: "60px",
        }}
        px={{
          base: "3px",
          md: "1rem",
        }}
        maxW="1160px"
      >
        <Box
          display={{
            base: "block",
            md: "none",
          }}
        >
          <Header />
        </Box>

        <Box
          px={{
            base: "0px",
            md: "15px",
          }}
        >
          <TopRecommend />
        </Box>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
          }}
        >
          <GridItem
            px={{
              base: "0px",
              md: "15px",
            }}
            colSpan={1}
          >
            <Box>
              <Flex direction="column" gap="10px">
                <UserPanel />
                <BetPanel />
              </Flex>
            </Box>
          </GridItem>
          <GridItem
            px={{
              base: "0px",
              md: "15px",
            }}
            colSpan={2}
          >
            <Box boxShadow="base">{children}</Box>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default View;

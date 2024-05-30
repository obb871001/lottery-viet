import "./App.css";
import { Route, Routes } from "react-router-dom";
import PublicLottery from "./page/PublicLottery";
import { Box } from "@chakra-ui/react";
import NormalLottery from "./page/NormalLottery";
import View from "./page/view/View";
import BetHistory from "./page/BetHistory";
import LotteryResult from "./page/LotteryResult";

function App() {
  return (
    <Box as="main">
      <View>
        <Routes>
          <Route path="*" element={<PublicLottery />} />
          <Route path="/public-lottery" element={<PublicLottery />} />
          <Route path="/normal-lottery" element={<NormalLottery />} />
          <Route path="/bet-history" element={<BetHistory />} />
          <Route path="/lottery-result" element={<LotteryResult />} />
        </Routes>
      </View>
    </Box>
  );
}

export default App;

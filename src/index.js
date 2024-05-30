import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {
  ChakraProvider,
  ColorModeScript,
  FormLabel,
  extendTheme,
} from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ReduxRouter } from "@lagunovsky/redux-react-router";
import history from "./redux/history";
import { Route, Routes, useLocation } from "react-router-dom";
import { skeletonTheme } from "./chakraTheme/components/skeleton";
import { buttonTheme } from "./chakraTheme/components/button";
import { spinnerTheme } from "./chakraTheme/components/spinner";
import { inputTheme } from "./chakraTheme/components/input";
import { selectTheme } from "./chakraTheme/components/select";
import { checkboxTheme } from "./chakraTheme/components/checkbox";
import { numberInputTheme } from "./chakraTheme/components/inputNumber";
import { progressTheme } from "./chakraTheme/components/progress";
import { modalTheme } from "./chakraTheme/components/modal";
import { popoverTheme } from "./chakraTheme/components/popover";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: "#f6f6f6",
      },
    }),
  },
  colors: {
    primaryFontColor: "black",
    primary: {
      500: "#C72828",
    },
    secondary: {
      500: "#39BFBE",
    },
    gray: {
      50: "#F5F5F5",
      100: "#EDF2F7",
      150: "#DFDDDD",
      500: "#666666",
      600: "#999999",
      700: "#ccc",
      800: "#000",
    },
    "light-gray": "#CECCCC",
    "deep-gray": "#333333",
  },
  radii: {
    common: "5px",
  },
  space: {
    "common-x": "12px",
    "common-y": "8px",
  },
  components: {
    Skeleton: skeletonTheme,
    Button: buttonTheme,
    Spinner: spinnerTheme,
    Input: inputTheme,
    Select: selectTheme,
    Checkbox: checkboxTheme,
    NumberInput: numberInputTheme,
    Progress: progressTheme,
    Modal: modalTheme,
    Popover: popoverTheme,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

const routerSelector = (state) => state.navigator;

root.render(
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <ReduxRouter history={history} routerSelector={routerSelector}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ReduxRouter>
    </Provider>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const brandPrimary = defineStyle({
  background: "primary.500",
  color: "white",
  fontWeight: "normal",
  fontSize: "md",
  borderRadius: "common",
  _hover: {
    background: "brand.600",
    _disabled: {
      background: "brand.600",
      color: "white",
    },
  },
  // let's also provide dark mode alternatives
  //   _dark: {
  //     background: "orange.300",
  //     color: "orange.800",
  //   },
});

export const buttonTheme = defineStyleConfig({
  variants: { brandPrimary },
});

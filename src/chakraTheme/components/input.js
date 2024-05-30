import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const brandPrimary = definePartsStyle({
  field: {
    border: "1px solid",
    borderColor: "light-gray",
    color: "rgb(73,80,88)",
    fontWeight: "normal",
    background: "white",
    borderRadius: "0px",
    py: "5px",
    px: "10px",
    fontSize: "15px",
    height: "35px",
    // Let's also provide dark mode alternatives
    _dark: {
      background: "dark.100",
      borderColor: "gray.700",
      color: "white",
    },
    _focus: {
      borderColor: "primary.500",
    },
    _hover: {
      borderColor: "primary.500",
    },
  },

  addon: {
    border: "1px solid",
    borderColor: "gray.200",
    background: "gray.200",
    borderRadius: "full",
    color: "gray.500",

    _dark: {
      borderColor: "gray.600",
      background: "gray.600",
      color: "gray.400",
    },
  },
});

export const inputTheme = defineMultiStyleConfig({
  variants: { brandPrimary },
});

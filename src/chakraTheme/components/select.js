import { selectAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys);

const brandPrimary = definePartsStyle({
  // define the part you're going to style
  field: {
    border: "1px solid",
    borderColor: "light-gray",
    color: "black",
    fontWeight: "normal",
    background: "white",
    borderRadius: "0px",
    py: "5px",
    px: "10px",
    fontSize: "15px",
    height: "35px",
    _focus: {
      borderColor: "primary.500",
    },
    _hover: {
      borderColor: "primary.500",
    },
    _dark: {
      color: "light.100",
      borderColor: "dark.300",
      bg: "dark.100",
    },
  },
});

export const selectTheme = defineMultiStyleConfig({
  variants: { brandPrimary },
});

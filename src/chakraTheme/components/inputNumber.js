import { numberInputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(numberInputAnatomy.keys);

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
      background: "dark.100",
      borderColor: "gray.700",
    },
  },
});

export const numberInputTheme = defineMultiStyleConfig({
  variants: { brandPrimary },
});

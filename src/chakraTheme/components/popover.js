import { popoverAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const brandPrimary = definePartsStyle({
  _focus: {
    outlineOffset: "0px",
  },
  _hover: {
    outlineOffset: "0px",
  },
  _active: {
    outlineOffset: "0px",
  },
  arrow: {
    bg: "light.100",
    _dark: {
      bg: "dark.200",
    },
  },
  body: {
    _focus: {
      outlineOffset: "0px",
    },
    _hover: {
      outlineOffset: "0px",
    },
    _active: {
      outlineOffset: "0px",
    },
    outlineOffset: "0px",
    borderRadius: "common",
    bg: "light.100",
    color: "dark.200",
    _dark: {
      bg: "dark.200",
      color: "light.100",
    },
  },
});

export const popoverTheme = defineMultiStyleConfig({
  variants: { brandPrimary },
});

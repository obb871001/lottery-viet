import { modalAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(modalAnatomy.keys);

const brandPrimary = definePartsStyle({
  dialog: {
    bg: "light.100",
    _dark: {
      bg: "dark.200",
    },
  },
});

export const modalTheme = defineMultiStyleConfig({
  variants: { brandPrimary },
});

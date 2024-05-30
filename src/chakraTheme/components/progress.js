import { progressAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(progressAnatomy.keys);

const brandPrimary = definePartsStyle({
  filledTrack: {
    bg: "primary.500",
  },
});

export const progressTheme = defineMultiStyleConfig({
  variants: { brandPrimary },
});

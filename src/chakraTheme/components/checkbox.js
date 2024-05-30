import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const brandPrimary = definePartsStyle({
  // define the part you're going to style
  label: {
    fontFamily: "mono", // change the font family of the label
  },
  control: defineStyle({
    rounded: "full",
    boxSize: "5",
    colorScheme: "primary.500",
    iconColor: "primary.500",
  }),
});

export const checkboxTheme = defineMultiStyleConfig({
  variants: { brandPrimary },
});

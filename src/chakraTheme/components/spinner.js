import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
const brandPrimary = defineStyle({
  color: "primary.500", // change the thickness of the spinner
});
export const spinnerTheme = defineStyleConfig({
  variants: { brandPrimary },
});

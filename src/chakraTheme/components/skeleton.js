import {
  cssVar,
  defineStyle,
  defineStyleConfig,
} from "@chakra-ui/styled-system";

const $startColor = cssVar("skeleton-start-color");
const $endColor = cssVar("skeleton-end-color");

const brandPrimary = defineStyle({
  borderRadius: "radii.common",
  _light: {
    [$startColor.variable]: "colors.blackAlpha.300", //changing startColor to red.100
    [$endColor.variable]: "colors.blackAlpha.300", // changing endColor to red.400
  },
  _dark: {
    [$startColor.variable]: "colors.dark.100", //changing startColor to red.800
    [$endColor.variable]: "colors.dark.100", // changing endColor to red.600
  },
});
export const skeletonTheme = defineStyleConfig({
  variants: { brandPrimary },
});

import { motion } from "framer-motion";
import styled from "styled-components";

import { variants } from "./Letter.variants";

export const Container = styled(motion.div).attrs(() => ({
  initial: "appear",
  variants,
}))`
  cursor: default;
  color: grey;
  font-size: 24px;
  transform: origin(0.5);
`;

import { motion } from "framer-motion";
import styled from "styled-components";

const variants = {
  init: {},
  appear: {
    transition: {
      staggerChildren: 0.3,
      when: 'beforeChildren',
    },
  },
};

export const ContainerH = styled(motion.div).attrs(() => ({
  initial: "init",
  variants,
}))`
  display: flex;
  flex-direction: row;
`;

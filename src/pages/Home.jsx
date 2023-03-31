import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import React from 'react'
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
      exitVariant="out"
    >
        <Veggie />
        <Popular />
    </motion.div>
  )
}

export default Home
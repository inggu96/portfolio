import React from "react";
import MovieIntro from "./MovieIntro";
import MovieTitle from "./MovieTitle";
import { motion } from "framer-motion";

const Movie = () => {
  return (
    <main>
      <motion.div animate={{ y: 0 }} initial={{ y: 150 }}>
        <MovieTitle />
        <MovieIntro />
      </motion.div>
    </main>
  );
};

export default Movie;

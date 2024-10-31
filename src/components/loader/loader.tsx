"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Loader = () => {
  const blackControls = useAnimation();
  const greenControls = useAnimation();
  const h1Controls = useAnimation();
  const h2Controls = useAnimation();

  useEffect(() => {
    document.body.classList.add("no-scroll");
    const loadSequence = async () => {
      // Text animations for initial reveal
      await h1Controls.start({
        x: -130,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeInOut" }, // Faster reveal
      });
      await h2Controls.start({
        x: 130,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeInOut" }, // Faster reveal
      });

      // Fade out text
      await h1Controls.start({
        opacity: 0,
        transition: { duration: 0.5 },
      });
      await h2Controls.start({
        opacity: 0,
        transition: { duration: 0.5, delay: 0.15 },
      });

      // Start black panel and green panel animations simultaneously
      blackControls.start({
        y: "-100%",
        transition: { duration: 0.5, ease: "easeInOut" }, // Faster upward movement
      });

      greenControls.start({
        y: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      });

      // Animate the green panel to move off the top of the screen
      await greenControls.start({
        y: "-100%",
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    };

    loadSequence();

    return () => {
      // Ensure scrolling is enabled if the component unmounts
      document.body.classList.remove("no-scroll");
    };
  }, [blackControls, greenControls, h1Controls, h2Controls]);

  return (
    <div className="fixed top-0 w-full h-screen z-50 overflow-hidden">
      {/* Black Panel */}
      <motion.div
        className="bg-black h-screen flex justify-center items-center"
        animate={blackControls}
        initial={{ y: 0 }} // Start at full height
      >
        <motion.h1
          className="absolute bold-font text-6xl opacity-0 bg-gradient-to-r from-[#ffb74d] to-[#b71c1c] bg-clip-text text-transparent m-0"
          animate={h1Controls}
        >
          Gurvinder
        </motion.h1>
        <motion.h1
          className="absolute bold-font text-6xl opacity-0 bg-gradient-to-r from-[#ffb74d] to-[#b71c1c] bg-clip-text text-transparent m-0"
          animate={h2Controls}
        >
          Singh
        </motion.h1>
      </motion.div>

      {/* Gradient Panel */}
      <motion.div
        className="fixed bottom-0 w-full h-screen bg-gradient-to-r from-[#ffb74d] to-[#b71c1c]"
        initial={{ y: "100%" }} // Start off-screen at the bottom
        animate={greenControls}
      />
    </div>
  );
};

export default Loader;

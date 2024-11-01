"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Loader = () => {
  const blackControls = useAnimation();
  const greenControls = useAnimation();
  const h1Controls = useAnimation();
  const h2Controls = useAnimation();

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.add("no-scroll");

    const loadSequence = async () => {
      if (isMobile) {
        h1Controls.start({
          y: -50,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        });
      } else {
        h1Controls.start({
          x: -120,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        });
      }

      if (isMobile) {
        await h2Controls.start({
          y: 20,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        });
      } else {
        await h2Controls.start({
          x: 120,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        });
      }

      await Promise.all([
        h1Controls.start({
          opacity: 0,
          transition: { duration: 0.5 },
        }),
        h2Controls.start({
          opacity: 0,
          transition: { duration: 0.5 },
        }),
      ]);

      blackControls.start({
        y: "-100%",
        transition: { duration: 0.5, ease: "easeInOut" },
      });

      greenControls.start({
        y: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      });

      await greenControls.start({
        y: "-100%",
        transition: { duration: 0.5, ease: "easeInOut" },
      });

      if (!containerRef.current) return;
      containerRef.current.style.display = "none";

      document.body.classList.remove("no-scroll");
    };

    loadSequence();
  }, [blackControls, greenControls, h1Controls, h2Controls]);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 w-full h-screen z-50 overflow-hidden"
    >
      <motion.div
        className="bg-black h-screen flex justify-center items-center"
        animate={blackControls}
        initial={{ y: 0 }}
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

      <motion.div
        className="fixed bottom-0 w-full h-screen bg-gradient-to-r from-[#ffb74d] to-[#b71c1c]"
        initial={{ y: "100%" }}
        animate={greenControls}
      />
    </div>
  );
};

export default Loader;

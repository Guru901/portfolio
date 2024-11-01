"client-only";
"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function MouseFollower() {
  const [isMounted, setIsMounted] = useState(false);

  const box = useRef<HTMLDivElement>(null);

  const [postion, setPostion] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!box.current) {
        return;
      }

      setPostion({ x: event.pageX + 6, y: event.pageY + 6 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <motion.div
      className="box bg-gradient-to-r from-[#ffb74d] via-[#ff6f61] to-[#b71c1c]"
      ref={box}
      animate={{ x: postion.x, y: postion.y }}
      transition={{
        ease: "circIn",
        duration: 0,
        delay: 0,
      }}
    ></motion.div>
  );
}

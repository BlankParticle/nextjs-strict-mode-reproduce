"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ClientComponentPage2() {
  useEffect(() => {
    console.log("[Page 2] Client Component Mounted");
    return () => {
      console.log("[Page 2] Client Component Unmounted");
    };
  }, []);

  return (
    <div style={{ border: "1px solid green" }}>
      Client Component
      <motion.div
        style={{ width: 100, height: 100, background: "red" }}
        initial={{ scale: 1, rotate: "0deg" }}
        whileHover={{ scale: 1.1, rotate: "30deg" }}
      >
        Hover Me
      </motion.div>
    </div>
  );
}

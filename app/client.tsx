"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ClientComponentPage1() {
  useEffect(() => {
    console.log("[Page 1] Client Component Mounted");
    return () => {
      console.log("[Page 1] Client Component Unmounted");
    };
  }, []);

  return (
    <div style={{ border: "1px solid green" }}>
      Client Component
      <motion.div
        style={{ height: 50, background: "blue", color: "white" }}
        initial={{ width: 100 }}
        whileHover={{ width: 200 }}
      >
        Hover Me to Grow
      </motion.div>
    </div>
  );
}

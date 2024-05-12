"use client";

import { useEffect } from "react";

export default function ClientComponentPage1() {
  useEffect(() => {
    console.log("[Page 1] Client Component Mounted");
    return () => {
      console.log("[Page 1] Client Component Unmounted");
    };
  }, []);

  return <div style={{ border: "1px solid green" }}>Client Component</div>;
}

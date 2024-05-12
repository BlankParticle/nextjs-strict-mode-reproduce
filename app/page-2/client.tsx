"use client";

import { useEffect } from "react";

export default function ClientComponentPage2() {
  useEffect(() => {
    console.log("[Page 2] Client Component Mounted");
    return () => {
      console.log("[Page 2] Client Component Unmounted");
    };
  }, []);

  return <div style={{ border: "1px solid green" }}>Client Component</div>;
}

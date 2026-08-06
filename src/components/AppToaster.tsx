"use client";

import { Toaster } from "react-hot-toast";

export function AppToaster() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          fontFamily: "var(--font-inter), Inter, sans-serif",
          fontSize: "14px",
        },
        success: {
          style: {
            border: "1px solid #bbf7d0",
            background: "#f0fdf4",
            color: "#166534",
          },
        },
        error: {
          style: {
            border: "1px solid #fecaca",
            background: "#fef2f2",
            color: "#991b1b",
          },
        },
      }}
    />
  );
}

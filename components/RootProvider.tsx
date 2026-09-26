"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import AmbientField from "@/components/AmbientField";

export default function RootProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <AmbientField />
      {children}
    </ThemeProvider>
  );
}

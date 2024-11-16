"use client";

import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/styles/themes/default";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "@/styles/global";
import { CompleteDataProvider } from "@/hooks/useCompleteData";

const InterFont = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        id="__next"
        suppressHydrationWarning={true}
        className={`${InterFont.className} ${InterFont.variable}`}
      >
        <ThemeProvider theme={defaultTheme}>
          <ToastContainer closeOnClick draggable />
          <CompleteDataProvider>
            <GlobalStyle />
            {children}
          </CompleteDataProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

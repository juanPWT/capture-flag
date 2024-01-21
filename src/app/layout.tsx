import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToastContext from "./context/ToastContext";
import AuthContext from "./context/AuthContext";
import NextThemesProvider from "./provider/NextThemesProvider";
import ConfettiProvider from "./provider/ConfettiProvider";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "capture flag",
  description: "capture flag",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ConfettiProvider>
            <AuthContext>
              <TooltipProvider>
                <ToastContext />
                {children}
              </TooltipProvider>
            </AuthContext>
          </ConfettiProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}

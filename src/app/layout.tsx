import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProviders } from "@/providers/chakraprovider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Trade a thon",
  description:
    "An App that gives you the best educational experience in trading",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={cn(` antialiased font-body `, inter.variable)}>
        <ChakraProviders>
          <Navbar />
          {children}
        </ChakraProviders>
      </body>
    </html>
  );
};

export default RootLayout;

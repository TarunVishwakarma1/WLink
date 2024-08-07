import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WLink",
  description: "wallet Link",
  icons:{
    icon:'/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head/>
    <body className={inter.className}>
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0  dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)]"></div>
      
    <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
    >
      
      {children}
      {/* <Toaster/> */}
    </ThemeProvider>
    </div>
    </body>
    </html>
  );
}

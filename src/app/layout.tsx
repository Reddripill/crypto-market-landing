import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/screens/layout/header/Header";
import Footer from "@/screens/layout/footer/Footer";

const inter = Inter({
   weight: ["300", "400", "500", "700"],
   subsets: ["latin"],
   display: "swap",
});

export const metadata: Metadata = {
   title: "Crypto Market",
   description: "Gravity team - crypto market",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <div className="wrapper">
               <Header />
               <main className="main">{children}</main>
               <Footer />
            </div>
         </body>
      </html>
   );
}

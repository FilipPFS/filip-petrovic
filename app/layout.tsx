import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "photoswipe/dist/photoswipe.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Filip Petrovic",
  description: "Filip Petrovic personnal portfolio.",
  icons: {
    icon: "/assets/images/logofp.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={poppins.variable}>
          <div className="min-h-screen flex flex-col text-white bg-[#060621]">
            <Header />
            <main>
              <ToastContainer />
              {children}
            </main>
            <Footer />
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}

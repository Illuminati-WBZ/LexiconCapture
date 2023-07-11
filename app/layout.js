import Navbar from "@/components/Navbar";
import "./globals.css";
import { Open_Sans, Caveat } from "next/font/google";
import Footer from "@/components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-openSans",
});
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata = {
  title: "LexiconCapture",
  description: "Generated text from any file through OCRbotz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable} ${caveat.variable}`}>
      <body>
        <main className="min-h-[100vh] flex flex-col justify-between h-full">
          <div className="px-4">
            <Navbar />
            <div>{children}</div>
          </div>
          <Footer />
          <ToastContainer />
        </main>
      </body>
    </html>
  );
}

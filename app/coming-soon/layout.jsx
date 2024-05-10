import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer className={"mt-[0px]"} />
      </body>
    </html>
  );
}

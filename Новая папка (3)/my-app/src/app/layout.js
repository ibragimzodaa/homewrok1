import Header from "@/components/header/header";
import "./globals.css";
import Footer from "@/components/footer/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {" "}
        {children}
        <Footer/>
      </body>
    </html>
  );
}

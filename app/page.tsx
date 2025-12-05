import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import URLShortener from "@/components/url-shortener";

export default function Home() {
  return (
    <main>
      <Navbar />
      <URLShortener />
      <Footer />
    </main>
  );
}

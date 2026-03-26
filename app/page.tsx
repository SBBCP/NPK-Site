import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Brands from "@/components/Brands";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Approach />
        <Brands />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
      <Navbar />
      <Hero />
      <About />
      <Contact />
    </main>
  );
}

import Image from "next/image";
import Hero from "./components/landing/Hero";
import FeaturedProperties from "./components/landing/Section-One";
import LifestyleSection from "./components/landing/Section-Two";
import TestimonialsSection from "./components/landing/Section.Three";
import Navigation from "./components/landing/Navbar";

export default function Home() {
  return (
<main>

  <Hero/>
  <FeaturedProperties/>
  <LifestyleSection/>
  <TestimonialsSection/>
</main>
  );
}

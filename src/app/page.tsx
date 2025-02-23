
import Hero from "./components/landing/Hero";
import FeaturedProperties from "./components/landing/Section-One";
import LifestyleSection from "./components/landing/Section-Two";
import TestimonialsSection from "./components/landing/Section.Three";
import NavigationHome from "./components/landing/Navbar";

export default function Home() {
  return (
<main>
<NavigationHome/>
  <Hero/>
  <FeaturedProperties/>
  <LifestyleSection/>
  <TestimonialsSection/>
</main>
  );
}

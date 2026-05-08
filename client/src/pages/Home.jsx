import MainLayout from "../components/layout/MainLayout";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Footer from "../components/sections/Footer";
import CTA from "../components/sections/CTA";

const Home = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <Features />
        <CTA />
      </MainLayout>

      <Footer />
    </>
  );
};

export default Home;
import { Navbar } from '../../components/Navbar';
import { Hero } from '../../components/Hero';
import { NewsSourcesCarousel } from '../../components/NewsSourcesCarousel';
import { WhyInforman } from '../../components/WhyInforman';
import { Stats } from '../../components/Stats';
import { Reviews } from '../../components/Reviews';
import { Pricing } from '../../components/Pricing';
import { BusinessMarketing } from '../../components/BusinessMarketing';
import { FAQ } from '../../components/FAQ';
import { Footer } from '../../components/Footer';

export const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <NewsSourcesCarousel />
      <WhyInforman />
      <Stats />
      <Reviews />
      <Pricing />
      <BusinessMarketing />
      <FAQ />
      <Footer />
    </div>
  );
};
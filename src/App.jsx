import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import TrustStrip from './components/TrustStrip.jsx';
import BeforeAfter from './components/BeforeAfter.jsx';
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import WhoItsFor from './components/WhoItsFor.jsx';
import Faq from './components/Faq.jsx';
import CtaBand from './components/CtaBand.jsx';
import Testimonials from './components/Testimonials.jsx';
import DemoForm from './components/DemoForm.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="page">
      <Header />
      <main id="top">
        <Hero />
        <TrustStrip />
        <BeforeAfter />
        <Features />
        <HowItWorks />
        <WhoItsFor />
        <Faq />
        <CtaBand />
        <Testimonials />
        <DemoForm />
      </main>
      <Footer />
    </div>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Properties from "@/components/Properties";
import RevenueSimulator from "@/components/RevenueSimulator";
import Experiences from "@/components/Experiences";
import JourneeType from "@/components/JourneeType";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import SousLocation from "@/components/SousLocation";
import DevenirPartenaire from "@/components/DevenirPartenaire";
import Tarification from "@/components/Tarification";
import Bitcoin from "@/components/Bitcoin";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  return (
    <main className="bg-creme overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <Properties />
      <RevenueSimulator />
      <Experiences />
      <JourneeType />
      <About />
      <Testimonials />
      <Partners />
      <SousLocation />
      <Tarification />
      <Bitcoin />
      <DevenirPartenaire />
      <Newsletter />
      <Contact />
      <Footer />
      <ChatBot />
      <WhatsAppButton />
      <CookieConsent />
    </main>
  );
}

import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Offers from "@/components/Offers";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import ServicesFAQ from "@/components/ServicesFAQ";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import News from "@/components/News";
import FollowUs from "@/components/FollowUs";
import ContactMap from "@/components/ContactMap";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main id="inicio">
        <Hero />
        <About />
        <WhyUs />
        <section id="servicios">
          <Services />
          <Offers />
        </section>
        <section id="portafolio">
          <Portfolio />
        </section>
        <Pricing />
        <ServicesFAQ />
        <section id="nosotros">
          <Team />
        </section>
        <Testimonials />
        <News />
        <FollowUs />
        <ContactMap />
        { /*<Newsletter />*/}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

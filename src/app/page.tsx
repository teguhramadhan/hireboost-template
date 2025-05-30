// Import Components
import Hero from "@/components/Hero";
import WhyHireBoost from "@/components/Whyhireboost";
import Testimonial from "@/components/Testimonial";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/utils/BacktotopButton";

// Import Components/utils
import FullPageScroller from "@/components/utils/FullPageScroller";

export default function Home() {
  return (
    <FullPageScroller>
      <section className="h-screen">
        <Hero />
      </section>
      <section className="h-screen">
        <WhyHireBoost />
      </section>
      <section className="h-screen">
        <Testimonial />
      </section>
      <section className="h-screen">
        <Pricing />
      </section>
      <section className="h-screen">
        <Faq />
      </section>
      <section>
        <Footer />
      </section>

      {/* Tombol kembali ke atas */}
      <BackToTopButton />
    </FullPageScroller>
  );
}

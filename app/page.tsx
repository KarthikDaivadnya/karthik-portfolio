import Header from "@/components/layout/Header";
import DockNav from "@/components/layout/DockNav";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/layout/Loader";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgress from "@/components/layout/ScrollProgress";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import { ToastProvider } from "@/components/ui/Toast";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import TechMarquee from "@/components/sections/TechMarquee";
import GithubStats from "@/components/sections/GithubStats";
import Achievements from "@/components/sections/Achievements";
import Certifications from "@/components/sections/Certifications";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import AIChatWidget from "@/components/sections/AIChatWidget";

export default function Home() {
  return (
    <ToastProvider>
      <SmoothScrollProvider>
        <Loader />
        <CustomCursor />
        <ScrollProgress />
        <Header />
        <main id="main">
          <Hero />
          <TechMarquee />
          <About />
          <Skills />
          <Projects />
          <GithubStats />
          <Achievements />
          <Certifications />
          <Services />
          <Testimonials />
          <Blog />
          <Contact />
        </main>
        <Footer />
        <DockNav />
        <AIChatWidget />
      </SmoothScrollProvider>
    </ToastProvider>
  );
}

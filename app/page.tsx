import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AppointmentForm from '@/components/AppointmentForm';
import Services from '@/components/Services';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import DoctorProfile from '@/components/DoctorProfile';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f8]">
      <Navbar />
      <Hero />
      <AppointmentForm />
      <Services />
      <About />
      <WhyChooseUs />
      <DoctorProfile />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}

import Footer from "@/components/footer/footer";
import Certifie from "@/components/certifie/certifie";
import Hero from "@/components/Hero/hero_section";
import Job from "@/components/jobs/jobcard";
import Recommend from "@/components/recomendation/recommend";


export default function Home() {
  return (
    <main>
      <Hero />
      <Certifie />
      <Recommend />
      <Job />
      <Footer />
    </main>
  );
}

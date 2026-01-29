import Footer from "@/components/footer/footer";
import Herohome from "@/components/Hero-homepage/herohome";
import Hero from "@/components/Hero/Hero";
import Recommend from "@/components/recomendation/recommend";


export default function Home() {
  return (
    <main>
      <Hero />
      <Herohome />
      <Recommend />
      <Footer />
    </main>
  );
}

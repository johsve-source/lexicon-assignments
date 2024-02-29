import Hero from '../components/Hero';
import Featured from '../components/Featured';
import Footer from '../components/Footer';

export default function Main() {
  return (
    <main>
      <Hero />
      <Featured />
      {/* I will probably rename Activities component to featured. A more extensive list of activities will be included*/}
      {/* <Activities /> */}
      <Footer />
    </main>
  );
}

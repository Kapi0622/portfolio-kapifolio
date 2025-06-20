import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AboutSite from '../../components/AboutSite';
import AboutMe from '../../components/AboutMe';
import Works from '../../components/Works';
import Profile from '../../components/Profile';
import Contact from '../../components/Contact';

export default function Home() {
  return (
    <>
      <Header />
      {/* トップセクションのみをmainで囲む */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <section id="top" className="text-center py-20">
          <h1 className="text-5xl md:text-7xl font-bold text-primary">Kapifolio</h1>
          <p className="mt-4 text-lg text-text-sub">My Creative Portfolio</p>
        </section>
      </main>
      
      {/* 背景付きセクションを個別に配置 */}
      <AboutSite />
      <AboutMe />
      <Works />
      <Profile />
      <Contact />
      
      <Footer />
    </>
  );
}
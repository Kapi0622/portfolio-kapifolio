import AboutSite from '../../components/AboutSite';
import AboutMe from '../../components/AboutMe';
import Works from '../../components/Works';
import Profile from '../../components/Profile';
import Contact from '../../components/Contact';
import SiteShell from '../components/SiteShell';
import HomeHero from '../components/HomeHero';
import { getAllWorks } from '../lib/works';

export default function Home() {
  const works = getAllWorks();

  return (
    <SiteShell>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <HomeHero />
      </main>

      <AboutSite />
      <AboutMe />
      <Works works={works} />
      <Profile />
      <Contact />
    </SiteShell>
  );
}

import AboutSite from '../../components/AboutSite';
import AboutMe from '../../components/AboutMe';
import Works from '../../components/Works';
import Profile from '../../components/Profile';
import Contact from '../../components/Contact';
import SiteShell from '../components/SiteShell';
import HomeHero from '../components/HomeHero';
import EventsSection from '../components/events/EventsSection';
import { getAllWorks } from '../lib/works';
import { getAllEvents } from '../lib/events';

export default function Home() {
  const works = getAllWorks();
  const events = getAllEvents();

  return (
    <SiteShell>
      <HomeHero />

      <AboutSite />
      <AboutMe />
      <Works works={works} />
      <EventsSection events={events} />
      <Profile />
      <Contact />
    </SiteShell>
  );
}

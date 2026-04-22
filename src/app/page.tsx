import Works from '../../components/Works';
import Contact from '../../components/Contact';
import SiteShell from '../components/SiteShell';
import HomeHero from '../components/HomeHero';
import SkillsSection from '../components/skills/SkillsSection';
import EventsSection from '../components/events/EventsSection';
import ProfileSection from '../components/profile/ProfileSection';
import { getAllWorks } from '../lib/works';
import { getAllEvents } from '../lib/events';
import { getSkills } from '../lib/skills';
import { getProfile } from '../lib/profile';

export default function Home() {
  const works = getAllWorks();
  const events = getAllEvents();
  const skills = getSkills();
  const profile = getProfile();

  return (
    <SiteShell>
      <HomeHero />
      <Works works={works} />
      <SkillsSection skills={skills} />
      <EventsSection events={events} />
      <ProfileSection profile={profile} />
      <Contact />
    </SiteShell>
  );
}

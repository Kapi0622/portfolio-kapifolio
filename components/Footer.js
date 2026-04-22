"use client";

import { FaXTwitter, FaGithub, FaInstagram } from 'react-icons/fa6';
import { useTheme } from '../src/contexts/ThemeContext';

const SOCIAL = [
  { href: 'https://x.com/kapi_0622', icon: FaXTwitter, label: 'X' },
  { href: 'https://github.com/Kapi0622', icon: FaGithub, label: 'GITHUB' },
  { href: 'https://www.instagram.com/sogo.0622/', icon: FaInstagram, label: 'INSTAGRAM' },
];

const CREDITS = [
  { role: 'DEVELOPER', name: 'KAPI' },
  { role: 'DESIGN', name: 'KAPI' },
  { role: 'ENGINE', name: 'NEXT.JS / REACT / THREE.JS' },
  { role: 'COMPILED', name: new Date().getFullYear() },
];

const Footer = () => {
  const { isDark } = useTheme();
  const bg = isDark ? 'bg-bg-primary border-code-border text-text-sub' : 'bg-light-bg-primary border-light-code-border text-light-text-sub';
  const muted = isDark ? 'text-text-muted' : 'text-light-text-muted';
  const accent = isDark ? 'text-primary' : 'text-light-primary';

  return (
    <footer className={`border-t py-14 px-6 lg:px-12 font-mono ${bg}`}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-[10px] tracking-[0.4em] mb-4 ${accent}`}>
          ▼ END_OF_BROADCAST
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className={`font-display text-2xl font-bold mb-2 ${isDark ? 'text-text-main' : 'text-light-text-main'}`}>
              KAPI<span className={accent}>.</span>FOLIO
            </div>
            <div className={`text-xs ${muted}`}>
              Game × Web Developer Portfolio
            </div>
          </div>

          <div>
            <div className={`text-[10px] tracking-[0.3em] mb-3 ${muted}`}>CREDITS</div>
            <dl className="text-xs space-y-1.5">
              {CREDITS.map((c) => (
                <div key={c.role} className="flex gap-3">
                  <dt className={`${muted} w-24 shrink-0`}>{c.role}</dt>
                  <dd>{c.name}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <div className={`text-[10px] tracking-[0.3em] mb-3 ${muted}`}>CHANNELS</div>
            <div className="flex gap-3">
              {SOCIAL.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-10 h-10 rounded-md border flex items-center justify-center transition-colors ${
                    isDark ? 'border-code-border hover:text-primary hover:border-primary/60' : 'border-light-code-border hover:text-light-primary hover:border-light-primary/60'
                  }`}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={`mt-10 pt-4 border-t text-[10px] tracking-[0.3em] flex justify-between flex-wrap gap-2 ${muted} ${isDark ? 'border-code-border' : 'border-light-code-border'}`}>
          <span>© {new Date().getFullYear()} KAPIFOLIO.SYS — ALL RIGHTS RESERVED</span>
          <span>v2.0 / ▶ SIGNAL STABLE</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

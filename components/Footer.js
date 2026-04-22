"use client";

import { FaXTwitter, FaGithub, FaInstagram } from 'react-icons/fa6';
import { useTheme } from '../src/contexts/ThemeContext';

const SOCIAL = [
  { href: 'https://x.com/kapi_0622', icon: FaXTwitter, label: 'X (Twitter)' },
  { href: 'https://github.com/Kapi0622', icon: FaGithub, label: 'GitHub' },
  { href: 'https://www.instagram.com/sogo.0622/', icon: FaInstagram, label: 'Instagram' },
];

const TECH = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'];

const Footer = () => {
  const { isDark } = useTheme();

  const bg = isDark
    ? 'bg-bg-primary border-code-border text-text-sub'
    : 'bg-light-bg-primary border-light-code-border text-light-text-sub';
  const muted = isDark ? 'text-text-muted' : 'text-light-text-muted';
  const badge = isDark
    ? 'bg-bg-tertiary border-code-border'
    : 'bg-light-bg-tertiary border-light-code-border';

  return (
    <footer className={`border-t py-12 px-6 ${bg}`}>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 items-start">
        <div>
          <div className={`font-display text-xl font-bold ${isDark ? 'text-text-main' : 'text-light-text-main'}`}>
            Kapi<span className={isDark ? 'text-primary' : 'text-light-primary'}>.</span>folio
          </div>
          <p className={`mt-2 text-sm ${muted}`}>
            Game × Web Developer — Building playful digital experiences.
          </p>
        </div>

        <div>
          <div className={`text-xs uppercase tracking-wider mb-3 ${muted}`}>Built with</div>
          <div className="flex flex-wrap gap-1.5">
            {TECH.map((t) => (
              <span key={t} className={`text-[11px] px-2 py-0.5 rounded border ${badge}`}>{t}</span>
            ))}
          </div>
        </div>

        <div className="md:text-right">
          <div className={`text-xs uppercase tracking-wider mb-3 ${muted}`}>Follow</div>
          <div className="flex gap-3 md:justify-end">
            {SOCIAL.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${badge} ${
                  isDark ? 'hover:text-primary' : 'hover:text-light-primary'
                }`}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={`mt-10 pt-6 border-t text-xs text-center ${muted} ${isDark ? 'border-code-border' : 'border-light-code-border'}`}>
        © {new Date().getFullYear()} Kapifolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

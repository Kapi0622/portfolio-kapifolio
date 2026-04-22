"use client";

import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import type { ProfileData } from '../../lib/profile';

type Props = { profile: ProfileData };

export default function ProfileSection({ profile }: Props) {
  const { isDark } = useTheme();

  const sectionBg = isDark
    ? 'bg-bg-secondary text-text-main'
    : 'bg-light-bg-secondary text-light-text-main';
  const cardBg = isDark
    ? 'bg-bg-primary border-code-border'
    : 'bg-light-bg-primary border-light-code-border';
  const heading = isDark ? 'text-primary' : 'text-light-primary';
  const subHeading = isDark ? 'text-text-main' : 'text-light-text-main';
  const muted = isDark ? 'text-text-sub' : 'text-light-text-sub';
  const lineColor = isDark ? 'bg-code-border' : 'bg-light-code-border';
  const dotBorder = isDark
    ? 'bg-bg-secondary border-primary'
    : 'bg-light-bg-secondary border-light-primary';

  return (
    <section id="profile" className={`py-24 sm:py-28 md:py-32 ${sectionBg}`}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-3 ${heading}`}
        >
          Profile
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`mb-12 text-base sm:text-lg ${muted}`}
        >
          これまでの歩みと、ものづくりへの向き合いかた。
        </motion.p>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* 左: タイムライン (40%) */}
          <div className="lg:col-span-2">
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${muted}`}>
              Timeline
            </h3>
            <div className="relative">
              <div className={`absolute left-[0.4375rem] top-1 bottom-1 w-px ${lineColor}`} aria-hidden />
              <ol className="space-y-5">
                {profile.timeline.map((entry, i) => (
                  <motion.li
                    key={entry.year + entry.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="relative pl-8"
                  >
                    <span
                      className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${dotBorder}`}
                      aria-hidden
                    />
                    <div className={`text-xs font-mono ${muted}`}>{entry.year}</div>
                    <div className={`font-semibold ${subHeading}`}>{entry.title}</div>
                    {entry.note && <p className={`text-sm mt-1 ${muted}`}>{entry.note}</p>}
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>

          {/* 右: 読み物 + 特性 (60%) */}
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className={`rounded-2xl border p-6 sm:p-8 ${cardBg}`}
            >
              <h3 className={`text-lg font-bold mb-4 ${heading}`}>{profile.essay.title}</h3>
              <div className={`space-y-4 leading-relaxed ${muted}`}>
                {profile.essay.body.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-3">
              {profile.traits.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`rounded-xl border p-4 ${cardBg}`}
                >
                  <div className={`text-sm font-bold mb-1 ${subHeading}`}>{t.label}</div>
                  <div className={`text-xs ${muted}`}>{t.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

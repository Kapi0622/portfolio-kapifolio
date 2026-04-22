"use client";

import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import SectionBanner from '../hud/SectionBanner';
import type { ProfileData } from '../../lib/profile';

type Props = { profile: ProfileData };

const CHAR_STATS = [
  { label: 'UNITY', pct: 80 },
  { label: 'C#', pct: 78 },
  { label: 'NEXT.JS', pct: 70 },
];

function MiniStat({ label, pct, isDark }: { label: string; pct: number; isDark: boolean }) {
  const fill = isDark ? 'bg-primary' : 'bg-light-primary';
  const bg = isDark ? 'bg-bg-primary' : 'bg-light-bg-primary';
  const border = isDark ? 'border-code-border' : 'border-light-code-border';
  const muted = isDark ? 'text-text-muted' : 'text-light-text-muted';
  return (
    <div>
      <div className={`flex justify-between text-[10px] font-mono tracking-widest mb-1 ${muted}`}>
        <span>{label}</span>
        <span>{pct}</span>
      </div>
      <div className={`h-1.5 rounded-sm overflow-hidden border ${border} ${bg}`}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={`h-full ${fill}`}
        />
      </div>
    </div>
  );
}

export default function ProfileSection({ profile }: Props) {
  const { isDark } = useTheme();
  const sectionBg = isDark ? 'bg-bg-secondary text-text-main' : 'bg-light-bg-secondary text-light-text-main';
  const cardBg = isDark ? 'bg-bg-primary border-code-border' : 'bg-light-bg-primary border-light-code-border';
  const accent = isDark ? 'text-primary' : 'text-light-primary';
  const main = isDark ? 'text-text-main' : 'text-light-text-main';
  const muted = isDark ? 'text-text-sub' : 'text-light-text-sub';
  const subtle = isDark ? 'text-text-muted' : 'text-light-text-muted';
  const lineColor = isDark ? 'bg-code-border' : 'bg-light-code-border';

  return (
    <section id="profile" className={`py-24 sm:py-28 md:py-32 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionBanner
          stage="STAGE_04"
          title="CHARACTER PROFILE"
          subtitle="これまでの歩みと、ものづくりへの向き合いかた。"
        />

        <div className="grid lg:grid-cols-12 gap-8">
          {/* 左: キャラパネル (sticky) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 self-start">
            <div className={`rounded-xl border p-6 ${cardBg} hud-corner-frame ${accent}`}>
              <div className={`text-[10px] font-mono tracking-[0.3em] mb-3 ${subtle}`}>
                ID_CARD / PLAYER_01
              </div>
              <div className={`font-display text-3xl font-bold mb-1 ${main}`}>KAPI</div>
              <div className={`text-[11px] font-mono tracking-widest ${accent} mb-5`}>
                HYBRID DEVELOPER
              </div>

              <dl className="space-y-2 mb-6 text-sm font-mono">
                <div className={`flex justify-between ${muted}`}>
                  <dt className={subtle}>CLASS</dt>
                  <dd>Game × Web</dd>
                </div>
                <div className={`flex justify-between ${muted}`}>
                  <dt className={subtle}>FACTION</dt>
                  <dd>学生 (大学3年)</dd>
                </div>
                <div className={`flex justify-between ${muted}`}>
                  <dt className={subtle}>BASE</dt>
                  <dd>Ishikawa, JP</dd>
                </div>
                <div className={`flex justify-between ${muted}`}>
                  <dt className={subtle}>SINCE</dt>
                  <dd>2020 (プログラミング)</dd>
                </div>
              </dl>

              <div className={`text-[10px] font-mono tracking-[0.3em] mb-2 ${subtle}`}>
                EQUIPPED
              </div>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Unity', 'C#', 'Next.js', 'TypeScript'].map((t) => (
                  <span key={t} className={`px-2 py-0.5 text-[11px] rounded border ${
                    isDark ? 'bg-bg-tertiary border-code-border' : 'bg-light-bg-tertiary border-light-code-border'
                  }`}>
                    {t}
                  </span>
                ))}
              </div>

              <div className={`text-[10px] font-mono tracking-[0.3em] mb-2 ${subtle}`}>
                STATS
              </div>
              <div className="space-y-2">
                {CHAR_STATS.map((s) => (
                  <MiniStat key={s.label} label={s.label} pct={s.pct} isDark={isDark} />
                ))}
              </div>
            </div>
          </aside>

          {/* 右: タイムライン + 読み物 */}
          <div className="lg:col-span-8 space-y-8">
            {/* Timeline */}
            <div className={`rounded-xl border p-6 sm:p-8 ${cardBg} hud-corner-frame ${accent}`}>
              <h3 className={`text-[11px] font-mono tracking-[0.3em] mb-4 ${subtle}`}>
                [ TIMELINE ]
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
                        className={`absolute left-0 top-1.5 w-3.5 h-3.5 border-2 rotate-45 ${
                          isDark ? 'border-primary bg-bg-primary' : 'border-light-primary bg-light-bg-primary'
                        }`}
                        aria-hidden
                      />
                      <div className={`text-[10px] font-mono tracking-widest ${accent}`}>{entry.year}</div>
                      <div className={`font-display font-semibold ${main}`}>{entry.title}</div>
                      {entry.note && <p className={`text-sm mt-1 ${muted}`}>{entry.note}</p>}
                    </motion.li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Essay */}
            <div className={`rounded-xl border p-6 sm:p-8 ${cardBg} hud-corner-frame ${accent}`}>
              <h3 className={`text-[11px] font-mono tracking-[0.3em] mb-3 ${subtle}`}>
                [ LOG_POLICY ]
              </h3>
              <h4 className={`font-display font-bold text-xl mb-4 ${main}`}>{profile.essay.title}</h4>
              <div className={`space-y-3 leading-relaxed ${muted}`}>
                {profile.essay.body.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Traits */}
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
                  <div className={`text-[10px] font-mono tracking-widest ${accent} mb-1`}>[TRAIT]</div>
                  <div className={`font-display font-bold mb-1 ${main}`}>{t.label}</div>
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

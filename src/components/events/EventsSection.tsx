"use client";

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useTheme } from '../../contexts/ThemeContext';
import SectionBanner from '../hud/SectionBanner';
import type { EventItem, EventType, EventStatus } from '../../lib/events';

type Props = { events: EventItem[] };

const TYPE_LABEL: Record<EventType, string> = {
  internship: 'INTERNSHIP',
  hackathon: 'HACKATHON',
  conference: 'CONFERENCE',
  other: 'EVENT',
};

const STATUS_META: Record<EventStatus, { label: string; symbol: string; cls: string }> = {
  COMPLETED: { label: 'COMPLETED', symbol: '◆', cls: 'text-rarity-rare border-rarity-rare/50' },
  IN_PROGRESS: { label: 'IN PROGRESS', symbol: '◇', cls: 'text-rarity-legendary border-rarity-legendary/50' },
  SCHEDULED: { label: 'SCHEDULED', symbol: '◈', cls: 'text-rarity-epic border-rarity-epic/50' },
};

function typeBadgeClass(type: EventType, isDark: boolean) {
  if (isDark) {
    switch (type) {
      case 'internship': return 'text-primary border-primary/40';
      case 'hackathon': return 'text-accent border-accent/40';
      case 'conference': return 'text-secondary border-secondary/40';
      default: return 'text-text-sub border-code-border';
    }
  }
  switch (type) {
    case 'internship': return 'text-light-primary border-light-primary/40';
    case 'hackathon': return 'text-light-accent border-light-accent/40';
    case 'conference': return 'text-light-secondary border-light-secondary/40';
    default: return 'text-light-text-sub border-light-code-border';
  }
}

export default function EventsSection({ events }: Props) {
  const { isDark } = useTheme();
  const sectionBg = isDark ? 'bg-bg-primary text-text-main' : 'bg-light-bg-primary text-light-text-main';
  const cardBg = isDark ? 'bg-bg-secondary border-code-border' : 'bg-light-bg-secondary border-light-code-border';
  const muted = isDark ? 'text-text-sub' : 'text-light-text-sub';
  const subtle = isDark ? 'text-text-muted' : 'text-light-text-muted';
  const accent = isDark ? 'text-primary' : 'text-light-primary';

  return (
    <section id="events" className={`py-24 sm:py-28 md:py-32 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionBanner
          stage="STAGE_03"
          title="QUEST LOG — ACHIEVEMENTS"
          subtitle="外に出て学んだこと、これから学ぶこと。"
          count={events.length}
        />

        <ol className="space-y-5">
          {events.map((ev, i) => {
            const status = ev.status ?? 'COMPLETED';
            const smeta = STATUS_META[status];
            return (
              <motion.li
                key={ev.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`relative rounded-xl border p-5 sm:p-6 ${cardBg} hud-corner-frame ${accent}`}
              >
                {/* top line: quest id + status */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className={`text-[10px] font-mono tracking-[0.25em] ${subtle}`}>
                      QUEST_{String(i + 1).padStart(3, '0')}
                    </span>
                    <span className={`text-[10px] font-mono tracking-widest border px-2 py-0.5 rounded-sm ${typeBadgeClass(ev.type, isDark)}`}>
                      {TYPE_LABEL[ev.type]}
                    </span>
                    <span className={`text-[10px] font-mono tracking-widest border px-2 py-0.5 rounded-sm ${smeta.cls}`}>
                      {smeta.symbol} {smeta.label}
                    </span>
                  </div>
                  {typeof ev.xp === 'number' && (
                    <span className={`shrink-0 font-display font-bold text-sm text-rarity-legendary`}>
                      + {ev.xp.toLocaleString()} XP
                    </span>
                  )}
                </div>

                <div className={`text-xs font-mono ${muted} mb-2`}>
                  {ev.period} · {ev.organizer}
                </div>
                <h3 className={`font-display font-bold text-xl sm:text-2xl mb-2`}>
                  {ev.title}
                </h3>
                <p className={`text-sm ${muted} mb-3`}>{ev.summary}</p>
                {ev.learnings && ev.learnings.trim().length > 0 && (
                  <div className={`tech-writeup text-sm ${muted} border-l-2 pl-3 mt-3 ${isDark ? 'border-code-border' : 'border-light-code-border'}`}>
                    <div className={`text-[10px] font-mono tracking-widest mb-1 ${subtle}`}>[ LOG ]</div>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{ev.learnings}</ReactMarkdown>
                  </div>
                )}
                {ev.url && (
                  <a
                    href={ev.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block mt-3 text-xs font-mono tracking-widest underline ${accent}`}
                  >
                    VIEW_DETAILS ▸
                  </a>
                )}
              </motion.li>
            );
          })}
        </ol>

        <div className={`mt-6 text-center text-[11px] font-mono tracking-widest ${subtle}`}>
          [ MORE QUESTS INCOMING ]
        </div>
      </div>
    </section>
  );
}

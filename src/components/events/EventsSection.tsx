"use client";

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useTheme } from '../../contexts/ThemeContext';
import type { EventItem, EventType } from '../../lib/events';

type Props = { events: EventItem[] };

const TYPE_LABEL: Record<EventType, string> = {
  internship: 'インターン',
  hackathon: 'ハッカソン',
  conference: 'カンファレンス',
  other: 'その他',
};

function typeBadgeClass(type: EventType, isDark: boolean) {
  if (isDark) {
    switch (type) {
      case 'internship': return 'bg-secondary/15 text-secondary border-secondary/40';
      case 'hackathon': return 'bg-accent/15 text-accent border-accent/40';
      case 'conference': return 'bg-primary/15 text-primary border-primary/40';
      default: return 'bg-bg-tertiary text-text-sub border-code-border';
    }
  }
  switch (type) {
    case 'internship': return 'bg-light-secondary/15 text-light-secondary border-light-secondary/40';
    case 'hackathon': return 'bg-light-accent/15 text-light-accent border-light-accent/40';
    case 'conference': return 'bg-light-primary/15 text-light-primary border-light-primary/40';
    default: return 'bg-light-bg-tertiary text-light-text-sub border-light-code-border';
  }
}

export default function EventsSection({ events }: Props) {
  const { isDark } = useTheme();

  const sectionBg = isDark ? 'bg-bg-secondary text-text-main' : 'bg-light-bg-secondary text-light-text-main';
  const cardBg = isDark ? 'bg-bg-primary border-code-border' : 'bg-light-bg-primary border-light-code-border';
  const muted = isDark ? 'text-text-sub' : 'text-light-text-sub';
  const heading = isDark ? 'text-primary' : 'text-light-primary';
  const lineColor = isDark ? 'bg-code-border' : 'bg-light-code-border';

  return (
    <section
      id="events"
      className={`py-24 sm:py-28 md:py-32 transition-colors duration-300 ${sectionBg}`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-3 ${heading}`}
        >
          参加イベント / インターン
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`mb-12 text-base sm:text-lg ${muted}`}
        >
          外に出て学んだこと、これから学ぶこと。
        </motion.p>

        <div className="relative">
          {/* 縦線 */}
          <div className={`absolute left-4 sm:left-[7.5rem] top-0 bottom-0 w-px ${lineColor}`} aria-hidden />

          <div className="space-y-8">
            {events.map((ev, i) => (
              <motion.article
                key={ev.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col sm:flex-row gap-4"
              >
                {/* 日付 */}
                <div className={`sm:w-28 sm:text-right sm:pr-6 text-xs sm:text-sm font-mono ${muted} pl-10 sm:pl-0`}>
                  {ev.period}
                </div>

                {/* ドット */}
                <div
                  className={`absolute left-4 sm:left-[7.5rem] top-1 -translate-x-1/2 w-3 h-3 rounded-full border-2 ${
                    isDark ? 'bg-bg-primary border-primary' : 'bg-light-bg-primary border-light-primary'
                  }`}
                  aria-hidden
                />

                {/* カード */}
                <div className={`flex-1 rounded-xl border p-5 ml-10 sm:ml-6 ${cardBg}`}>
                  <div className="flex items-center flex-wrap gap-2 mb-2">
                    <span className={`px-2 py-0.5 text-[11px] rounded border ${typeBadgeClass(ev.type, isDark)}`}>
                      {TYPE_LABEL[ev.type]}
                    </span>
                    <span className={`text-xs ${muted}`}>{ev.organizer}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{ev.title}</h3>
                  <p className={`text-sm ${muted} mb-3`}>{ev.summary}</p>
                  {ev.learnings && ev.learnings.trim().length > 0 && (
                    <div className={`tech-writeup text-sm ${muted}`}>
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{ev.learnings}</ReactMarkdown>
                    </div>
                  )}
                  {ev.url && (
                    <a
                      href={ev.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block mt-3 text-xs underline ${heading}`}
                    >
                      詳細を見る →
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          {/* 空状態 / 末尾のプレースホルダ */}
          <div className={`relative mt-8 pl-10 sm:pl-[8.5rem] text-xs ${muted}`}>
            <div
              className={`absolute left-4 sm:left-[7.5rem] top-1 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-dashed ${
                isDark ? 'bg-bg-primary border-code-border' : 'bg-light-bg-primary border-light-code-border'
              }`}
              aria-hidden
            />
            今後も随時更新予定。
          </div>
        </div>
      </div>
    </section>
  );
}

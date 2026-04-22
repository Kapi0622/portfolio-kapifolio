"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import type { Work } from '../../lib/works';

type Props = { work: Work };

export default function WorkDetail({ work }: Props) {
  const { isDark } = useTheme();

  const sectionBg = isDark ? 'bg-bg-primary text-text-main' : 'bg-light-bg-primary text-light-text-main';
  const cardBg = isDark ? 'bg-bg-secondary border-code-border' : 'bg-light-bg-secondary border-light-code-border';
  const mutedText = isDark ? 'text-text-sub' : 'text-light-text-sub';
  const accent = isDark ? 'text-primary' : 'text-light-primary';
  const badgeBg = isDark
    ? 'bg-bg-tertiary border-code-border text-text-sub'
    : 'bg-light-bg-tertiary border-light-code-border text-light-text-sub';

  return (
    <section className={`min-h-screen transition-colors duration-300 ${sectionBg}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <Link
          href="/#works"
          className={`inline-flex items-center gap-2 text-sm ${mutedText} hover:opacity-70 transition-opacity mb-8`}
        >
          <FiArrowLeft /> 成果物一覧に戻る
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className={`text-sm ${mutedText} mb-2 flex flex-wrap gap-x-3 gap-y-1`}>
            <span>{work.genre}</span>
            {work.period && <span>・{work.period}</span>}
            <span>・{work.developmentType}</span>
          </div>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${accent}`}>
            {work.title}
          </h1>
          <p className={`mt-4 text-base sm:text-lg ${mutedText} max-w-3xl`}>
            {work.summary}
          </p>
        </motion.header>

        {/* ヒーロー画像 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`relative w-full aspect-video rounded-2xl overflow-hidden border shadow-xl mb-10 ${cardBg}`}
        >
          <Image
            src={work.mainImage}
            alt={work.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 1024px"
            priority
          />
        </motion.div>

        {/* 2 カラムレイアウト */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左: 本文 */}
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className={`text-xl font-bold mb-3 ${accent}`}>概要</h2>
              <div className={`prose-custom leading-relaxed ${mutedText}`}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {work.description}
                </ReactMarkdown>
              </div>
            </section>

            {work.techHighlights && work.techHighlights.trim().length > 0 && (
              <section>
                <h2 className={`text-xl font-bold mb-3 ${accent}`}>技術的こだわり</h2>
                <div
                  className={`tech-writeup rounded-xl border p-5 sm:p-6 ${cardBg} ${mutedText}`}
                >
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {work.techHighlights}
                  </ReactMarkdown>
                </div>
              </section>
            )}

            {work.activities && work.activities.length > 0 && (
              <section>
                <h2 className={`text-xl font-bold mb-3 ${accent}`}>担当した作業</h2>
                <ul className={`space-y-2 ${mutedText}`}>
                  {work.activities.map((a, i) => (
                    <li key={i} className="flex gap-2">
                      <span className={accent}>▸</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {work.images && work.images.length > 0 && (
              <section>
                <h2 className={`text-xl font-bold mb-3 ${accent}`}>スクリーンショット</h2>
                <div className={`rounded-xl border overflow-hidden ${cardBg}`}>
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={16}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true, dynamicBullets: true }}
                  >
                    {work.images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <div className="relative w-full aspect-video">
                          <Image
                            src={img}
                            alt={`${work.title} screenshot ${i + 1}`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 1024px"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </section>
            )}
          </div>

          {/* 右: メタ情報 (sticky) */}
          <aside className="lg:col-span-1">
            <div className={`lg:sticky lg:top-24 space-y-6 rounded-xl border p-5 ${cardBg}`}>
              <div>
                <div className={`text-xs uppercase tracking-wider ${mutedText} mb-2`}>
                  技術スタック
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {work.stack.map((t) => (
                    <span
                      key={t}
                      className={`px-2 py-1 text-xs rounded border ${badgeBg}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {work.architecture && work.architecture.length > 0 && (
                <div>
                  <div className={`text-xs uppercase tracking-wider ${mutedText} mb-2`}>
                    アーキテクチャ
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {work.architecture.map((a) => (
                      <span
                        key={a}
                        className={`px-2 py-1 text-xs rounded border ${badgeBg}`}
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <div className={`text-xs uppercase tracking-wider ${mutedText} mb-2`}>
                  役割
                </div>
                <div className="text-sm">{work.role}</div>
              </div>

              {work.teamInfo && (
                <div>
                  <div className={`text-xs uppercase tracking-wider ${mutedText} mb-2`}>
                    チーム
                  </div>
                  <div className="text-sm">{work.teamInfo}</div>
                </div>
              )}

              {work.contests && work.contests.length > 0 && (
                <div>
                  <div className={`text-xs uppercase tracking-wider ${mutedText} mb-2`}>
                    出展・コンテスト
                  </div>
                  <ul className="text-sm space-y-1">
                    {work.contests.map((c) => (
                      <li key={c}>・{c}</li>
                    ))}
                  </ul>
                </div>
              )}

              {work.links && work.links.length > 0 && (
                <div>
                  <div className={`text-xs uppercase tracking-wider ${mutedText} mb-2`}>
                    リンク
                  </div>
                  <div className="flex flex-col gap-2">
                    {work.links.map((l) => (
                      <a
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-between gap-2 px-3 py-2 rounded border text-sm transition-colors ${
                          isDark
                            ? 'border-code-border hover:bg-bg-tertiary'
                            : 'border-light-code-border hover:bg-light-bg-tertiary'
                        }`}
                      >
                        <span>{l.label}</span>
                        <FiExternalLink />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

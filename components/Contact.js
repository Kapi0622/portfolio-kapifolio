"use client";

import { FaXTwitter, FaGithub, FaInstagram } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { useTheme } from '../src/contexts/ThemeContext';
import SectionBanner from '../src/components/hud/SectionBanner';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xyzjjreg';

const SOCIAL = [
  { href: 'https://x.com/kapi_0622', icon: FaXTwitter, label: 'X' },
  { href: 'https://github.com/Kapi0622', icon: FaGithub, label: 'GITHUB' },
  { href: 'https://www.instagram.com/sogo.0622/', icon: FaInstagram, label: 'INSTAGRAM' },
];

const Contact = () => {
  const { isDark } = useTheme();

  const sectionBg = isDark ? 'bg-bg-primary text-text-main' : 'bg-light-bg-primary text-light-text-main';
  const cardBg = isDark ? 'bg-bg-secondary border-code-border' : 'bg-light-bg-secondary border-light-code-border';
  const muted = isDark ? 'text-text-sub' : 'text-light-text-sub';
  const subtle = isDark ? 'text-text-muted' : 'text-light-text-muted';
  const accent = isDark ? 'text-primary' : 'text-light-primary';
  const input = isDark
    ? 'bg-bg-primary border-code-border text-text-main focus:border-primary focus:ring-primary/30'
    : 'bg-light-bg-primary border-light-code-border text-light-text-main focus:border-light-primary focus:ring-light-primary/30';
  const primaryBtn = isDark
    ? 'bg-primary text-bg-primary hover:bg-primary/80'
    : 'bg-light-primary text-white hover:bg-light-primary/85';
  const socialBtn = isDark
    ? 'border-code-border hover:text-primary hover:border-primary/50'
    : 'border-light-code-border hover:text-light-primary hover:border-light-primary/50';

  return (
    <section id="contact" className={`py-24 sm:py-28 md:py-32 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionBanner
          stage="STAGE_05"
          title="TRANSMISSION — COMMS OPEN"
          subtitle="周波数を合わせて送信してください。通常 24 時間以内に返信します。"
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* 左: 情報 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className={`lg:col-span-2 rounded-xl border p-6 ${cardBg} hud-corner-frame ${accent} space-y-6`}
          >
            <div>
              <div className={`text-[10px] font-mono tracking-[0.3em] mb-2 ${subtle}`}>
                [ SIGNAL STATUS ]
              </div>
              <div className={`flex items-center gap-2 text-sm font-mono ${accent}`}>
                <span className="h-2 w-2 rounded-full bg-current animate-pulse" />
                CHANNEL ESTABLISHED
              </div>
            </div>

            <div>
              <div className={`text-[10px] font-mono tracking-[0.3em] mb-3 ${subtle}`}>
                [ QUERY_TYPES ]
              </div>
              <ul className={`text-sm space-y-2 ${muted}`}>
                <li>▸ 採用・インターン</li>
                <li>▸ ゲーム / Web 制作のご相談</li>
                <li>▸ 技術的な質問・議論</li>
                <li>▸ その他、気軽にどうぞ</li>
              </ul>
            </div>

            <div>
              <div className={`text-[10px] font-mono tracking-[0.3em] mb-3 ${subtle}`}>
                [ SECONDARY_CHANNELS ]
              </div>
              <div className="flex flex-col gap-2">
                {SOCIAL.map(({ href, icon: Icon, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-3 px-3 py-2 rounded-md border transition-colors font-mono text-xs tracking-widest ${socialBtn}`}
                  >
                    <Icon size={14} />
                    <span>{label}</span>
                    <span className="ml-auto opacity-60">▸</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 右: フォーム */}
          <motion.form
            action={FORMSPREE_ENDPOINT}
            method="POST"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`lg:col-span-3 rounded-xl border p-6 sm:p-8 space-y-5 ${cardBg} hud-corner-frame ${accent}`}
          >
            <div className={`text-[10px] font-mono tracking-[0.3em] ${subtle}`}>
              [ TRANSMISSION FORM ]
            </div>

            <div>
              <label htmlFor="name" className={`block text-[10px] font-mono tracking-widest mb-1.5 ${accent}`}>
                FIELD_01 / IDENTITY
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="山田 太郎"
                className={`w-full rounded-md border px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 transition-colors ${input}`}
              />
            </div>

            <div>
              <label htmlFor="email" className={`block text-[10px] font-mono tracking-widest mb-1.5 ${accent}`}>
                FIELD_02 / CALLBACK_ADDRESS
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="taro@example.com"
                className={`w-full rounded-md border px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 transition-colors ${input}`}
              />
            </div>

            <div>
              <label htmlFor="comment" className={`block text-[10px] font-mono tracking-widest mb-1.5 ${accent}`}>
                FIELD_03 / MESSAGE_PAYLOAD
              </label>
              <textarea
                id="comment"
                name="comment"
                rows={6}
                required
                placeholder="ご自由にお書きください。"
                className={`w-full rounded-md border px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 transition-colors resize-none ${input}`}
              />
            </div>

            <div className="flex items-center justify-between pt-2 gap-3 flex-wrap">
              <div className={`text-[10px] font-mono tracking-widest ${subtle}`}>
                ENCRYPTION: HTTPS / TLS
              </div>
              <button
                type="submit"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-md font-display font-bold text-sm tracking-widest transition-colors ${primaryBtn}`}
              >
                <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>▶</motion.span>
                TRANSMIT
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

"use client";

import { FaXTwitter, FaGithub, FaInstagram } from 'react-icons/fa6';
import { FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTheme } from '../src/contexts/ThemeContext';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xyzjjreg';

const SOCIAL = [
  { href: 'https://x.com/kapi_0622', icon: FaXTwitter, label: 'X (Twitter)' },
  { href: 'https://github.com/Kapi0622', icon: FaGithub, label: 'GitHub' },
  { href: 'https://www.instagram.com/sogo.0622/', icon: FaInstagram, label: 'Instagram' },
];

const Contact = () => {
  const { isDark } = useTheme();

  const sectionBg = isDark
    ? 'bg-bg-primary text-text-main'
    : 'bg-light-bg-primary text-light-text-main';
  const cardBg = isDark
    ? 'bg-bg-secondary border-code-border'
    : 'bg-light-bg-secondary border-light-code-border';
  const heading = isDark ? 'text-primary' : 'text-light-primary';
  const textMain = isDark ? 'text-text-main' : 'text-light-text-main';
  const muted = isDark ? 'text-text-sub' : 'text-light-text-sub';
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
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-3 ${heading}`}
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`mb-12 text-base sm:text-lg ${muted}`}
        >
          お気軽にご連絡ください。通常 24 時間以内に返信いたします。
        </motion.p>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* 左: メッセージ + SNS */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className={`text-lg font-bold mb-3 ${textMain}`}>こんなご連絡歓迎です</h3>
              <ul className={`text-sm space-y-2 ${muted}`}>
                <li>・採用・インターンに関するお話</li>
                <li>・ゲーム / Web 制作のご相談</li>
                <li>・技術的な質問・議論</li>
                <li>・その他、気軽にどうぞ</li>
              </ul>
            </div>

            <div>
              <div className={`text-xs uppercase tracking-wider mb-3 ${muted}`}>SNS</div>
              <div className="flex gap-3">
                {SOCIAL.map(({ href, icon: Icon, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-11 h-11 rounded-full border flex items-center justify-center transition-colors ${socialBtn}`}
                  >
                    <Icon size={18} />
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
            className={`lg:col-span-3 rounded-2xl border p-6 sm:p-8 space-y-5 ${cardBg}`}
          >
            <div>
              <label htmlFor="name" className={`block text-sm font-medium mb-1.5 ${textMain}`}>
                お名前
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="山田 太郎"
                className={`w-full rounded-lg border px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 transition-colors ${input}`}
              />
            </div>

            <div>
              <label htmlFor="email" className={`block text-sm font-medium mb-1.5 ${textMain}`}>
                メールアドレス
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="taro@example.com"
                className={`w-full rounded-lg border px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 transition-colors ${input}`}
              />
            </div>

            <div>
              <label htmlFor="comment" className={`block text-sm font-medium mb-1.5 ${textMain}`}>
                メッセージ
              </label>
              <textarea
                id="comment"
                name="comment"
                rows={6}
                required
                placeholder="お気軽にお問い合わせください。技術的な質問やプロジェクトのご相談など、何でもお待ちしております。"
                className={`w-full rounded-lg border px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 transition-colors resize-none ${input}`}
              />
            </div>

            <button
              type="submit"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${primaryBtn}`}
            >
              送信する
              <FiSend size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

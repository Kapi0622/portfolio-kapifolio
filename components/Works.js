"use client";

import { useState } from 'react';
import WorkModal from './WorkModal';
import { motion } from 'framer-motion';
import { useTheme } from '../src/contexts/ThemeContext';
import Image from 'next/image';

const worksData = [
  {
    id: 1,
    title: 'Kapifolio',
    mainImage: '/images/work/kapifolio/kapifolio.png',
    images: ['/images/work/kapifolio/kapifolio-image1.png', '/images/work/kapifolio/kapifolio-image2.png', '/images/work/kapifolio/kapifolio-image3.png'],
    description: '自身のスキルと制作実績を紹介するために作成したポートフォリオサイトです。',
    links: [
      {
        text: 'Live Demo',
        url: 'https://your-portfolio-url.com'
      }
    ],
    developmentType: '個人開発',
    teamInfo: 'ソロプロジェクト、Github Copilotを活用した開発',
    stack: 'React, Next.js, Tailwind CSS, Vercel, FormSpree, LLM(gemini), Github Copilot',
    role: '企画・要件定義、デザイン、フルスタック開発',
    activities: [
      'すべての工程を担当'
    ]
  },
  {
    id: 2,
    title: 'Miniverse',
    mainImage: '/images/work/miniverse/miniverse-icon.png',
    images: ['/images/work/miniverse/miniverse-1.png', '/images/work/miniverse/miniverse-2.png', '/images/work/miniverse/miniverse-3.png'],
    description: '所属学生団体「IoAプロジェクト」内のチーム「ミニゲーム班」の作品紹介サイトです。当サイトには、チームもしくは個人で制作したゲームのプレイが可能です。サイト制作は主に私一人で制作しました。現在サイトを、React,Next.jsに移行することを検討しています。',
    links: [
      {
        text: 'Miniverse',
        url: 'https://ioa-minigame-team.github.io/homepage/'
      },
      {
        text: 'IoA Project',
        url: 'https://ioaproject.com/'
      }
    ],
    developmentType: 'チーム開発',
    teamInfo: '3名のミニゲーム班チーム、IoAプロジェクト内サブチーム',
    stack: 'HTML, CSS, javascript, formspree, Unity, C#',
    role: '企画・要件定義、デザイン、フルスタック開発、ゲーム開発(企画を含む)',
    activities: [
      'Miniverseサイト全体の制作',
      '[ゲーム]Speed Slashの制作',
      '[ゲーム]かぜ、ひいちゃうの制作'
    ]
  },
  {
    id: 3,
    title: 'SAKITO',
    mainImage: '/images/work/SAKITO/SAKITO.png',
    images: ['/images/work/SAKITO/SAKITO-1.png', '/images/work/SAKITO/SAKITO-2.png', '/images/work/SAKITO/SAKITO-3.png'],
    description: 'SAKITOは、アンケート回答や1日1回のポイントガチャ、招待コードの利用・共有を通じてポイントを獲得できる、株式会社CirKitの運営するウェブサイトです。獲得したポイントは引換券ガチャに使用でき、当選すると学食や学内コンビニで利用可能な引換券が手に入ります。私は、企画提案や組織運営・改善、メンバーマネジメントを主に担っています。エンジニアとしてもSAKITOにバリューを出すために、Ruby・Ruby on Railsの学習を少しずつやっています。',
    links: [
      {
        text: 'SAKITO',
        url: 'https://sakito.cirkit.jp/'
      },
      {
        text: 'CirKit',
        url: 'https://cirkit.jp/'
      }
    ],
    developmentType: 'チーム開発',
    teamInfo: '約10名の学生開発チーム、PMとしてプロジェクト管理を担当',
    stack: 'Ruby, Ruby on Rails, MySQL, Docker, JavaScript, SCSS',
    role: 'PM(プロジェクトマネージャー)、ご意見番',
    activities: [
      'SAKITOチームの組織運営・改善',
      'イベント企画・運営',
      'アンケート採用',
      'お問い合わせ対応',
      'ステークホルダーとの調整'
    ]
  },
  {
    id: 4,
    title: '[ゲーム]かぜ、ひいちゃう',
    mainImage: '/images/work/kaze-hichau/kaze-hichau.png',
    images: ['/images/work/kaze-hichau/kaze-hichau-1.png', '/images/work/kaze-hichau/kaze-hichau-2.png', '/images/work/kaze-hichau/kaze-hichau-3.png', '/images/work/kaze-hichau/kaze-hichau-4.png'],
    description: 'かぜ、ひいちゃうは、風邪をテーマにしたバンサバライクのカジュアルゲームです。謎のウイルスが蔓延し人々が咳き込みながらさまよう荒廃した世界で、数少ない正気な生存者であるプレイヤーは、次々と襲い来る敵の攻撃をひたすら避け、落ちているマスクを命綱にして1秒でも長く生き延びることを目指します。私は、ゲームの企画やデザイン、実装を担当しました。',
    links: [
      {
        text: 'Unityroom',
        url: 'https://unityroom.com/games/kaze-hichau'
      },
      {
        text: 'Miniverse',
        url: 'https://ioa-minigame-team.github.io/homepage/kaze-hichau.html'
      },
      {
        text: 'Github',
        url: 'https://github.com/IoA-minigame-team/gamejam-first'
      }
    ],
    developmentType: 'チーム開発',
    teamInfo: 'ミニゲーム班チーム所属の2名で制作',
    stack: 'Unity, C#, Gemini(画像生成、制作サポート)' ,
    role: '企画、プログラム、ステージデザイン 等',
    activities: [
      'ゲームコンセプト・企画書作成',
      'ゲーム内アイテム(マスク)の実装',
      'ステージのデザインと実装',
      'プレイヤー操作・物理挙動システム開発',
      '障害物生成・攻撃の衝突判定ロジック実装',
      'スコアシステム・ゲームオーバー処理実装',
      'タイトル・リザルト画面の制作と画面遷移の実装',
      'BGM・SEの実装',
      'Unityroomへの公開作業とスコアのAPI連携'
    ]
  },
  {
    id: 5,
    title: '[ゲーム]加賀五彩パズル',
    mainImage: '/images/work/kagagosai/kagagosai.png',
    images: ['/images/work/kagagosai/kagagosai-1.png', '/images/work/kagagosai/kagagosai-2.png', '/images/work/kagagosai/kagagosai-3.png', '/images/work/kagagosai/kagagosai-4.png'],
    description: '本作は石川県の伝統工芸「九谷焼」の絵付けを、小さなお子様でも直感的に楽しめるデジタルパズルゲームとして再構築した作品です。プレイヤーは、加賀藩前田家が奨励した「加賀五彩」（藍、臙脂、草、黄土、古代紫）をモチーフにした美しいピースを使い、時間内にお題となる器の模様を次々と完成させていきます。遊ぶたびに問題が自動生成されるため、何度でも新鮮な気持ちで挑戦できます。ゆっくり作るモードでは、制限時間なしでじっくりと絵付けを楽しむことも可能です。本作は、2025年に金沢で開催される「キッズゲームクリエイターコンテスト(学生の部)」の応募作品として制作しました。',
    links: [
      {
        text: 'Unityroom',
        url: 'https://unityroom.com/games/kagagoshiki-puzzle'
      },
      {
        text: 'Github',
        url: 'https://github.com/Kapi0622/kagagosai-puzzle'
      }
    ],
    developmentType: '個人開発',
    teamInfo: 'ソロプロジェクト',
    stack: 'Unity, C#, Gemini(画像生成、制作サポート)',
    role: '企画、プログラム、ステージデザイン 等',
    activities: [
      'ゲームコンセプト・企画書作成',
      'ゲーム内アイテム(マスク)の実装',
      'ステージのデザインと実装',
      'プレイヤー操作・物理挙動システム開発',
      '障害物生成・攻撃の衝突判定ロジック実装',
      'スコアシステム・ゲームオーバー処理実装',
      'タイトル・リザルト画面の制作と画面遷移の実装',
      'BGM・SEの実装',
      'Unityroomへの公開作業とスコアのAPI連携'
    ]
  },
];

const Works = () => {
  const { isDark } = useTheme();
  const [selectedWork, setSelectedWork] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      id="works"
      className={`py-40 transition-colors duration-300 ${
        isDark 
          ? 'bg-bg-primary text-text-main' 
          : 'bg-light-bg-primary text-light-text-main'
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-2 font-mono ${
            isDark ? 'text-primary' : 'text-light-primary'
          }`}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className={isDark ? 'text-terminal-green' : 'text-light-terminal-green'}>$</span> ls -la ~/projects
        </motion.h2>
        <motion.p
          className={`mt-2 mb-12 text-xl text-center font-mono ${
            isDark ? 'text-text-sub' : 'text-light-text-sub'
          }`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {"// 私が携わったプロダクト一覧"}
        </motion.p>
        
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {worksData.map((work) => (
            <motion.div
              key={work.id}
              className={`border rounded-lg overflow-hidden cursor-pointer group relative transition-colors duration-300 ${
                isDark 
                  ? 'bg-code-bg border-code-border' 
                  : 'bg-light-code-bg border-light-code-border'
              }`}
              onClick={() => setSelectedWork(work)}
              variants={cardVariants}
              whileHover={{ 
                y: -5, 
                scale: 1.02, 
                boxShadow: isDark 
                  ? "0 10px 30px rgba(16, 185, 129, 0.3)" 
                  : "0 10px 30px rgba(14, 165, 233, 0.3)",
                transition: { duration: 0.3 } 
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* ターミナルヘッダー */}
              <div className={`px-4 py-2 flex items-center space-x-2 border-b transition-colors duration-300 ${
                isDark 
                  ? 'bg-bg-tertiary border-code-border' 
                  : 'bg-light-bg-tertiary border-light-code-border'
              }`}>
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className={`w-3 h-3 rounded-full ${
                  isDark ? 'bg-primary' : 'bg-light-primary'
                }`}></div>
                <span className={`text-sm font-mono ml-2 ${
                  isDark ? 'text-text-muted' : 'text-light-text-muted'
                }`}>{work.title.toLowerCase()}.project</span>
              </div>
              
              {/* プロジェクト画像 */}
              <div className={`w-full aspect-square overflow-hidden transition-colors duration-300 relative ${
                isDark ? 'bg-bg-secondary' : 'bg-light-bg-secondary'
              }`}>
                <Image
                  src={work.mainImage}
                  alt={work.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              {/* プロジェクト情報 */}
              <div className={`p-4 transition-colors duration-300 ${
                isDark ? 'bg-code-bg' : 'bg-light-code-bg'
              }`}>
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`font-mono text-sm ${
                    isDark ? 'text-terminal-green' : 'text-light-terminal-green'
                  }`}>➜</span>
                  <h3 className={`font-bold text-xl font-mono ${
                    isDark ? 'text-primary' : 'text-light-primary'
                  }`}>{work.title}</h3>
                </div>
                
                {/* 技術スタック - バッジ風 */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {work.stack.split(', ').slice(0, 3).map((tech, index) => (
                    <span 
                      key={index} 
                      className={`px-2 py-1 text-sm font-mono rounded border transition-colors duration-300 ${
                        isDark 
                          ? 'bg-bg-tertiary text-text-sub border-code-border' 
                          : 'bg-light-bg-tertiary text-light-text-sub border-light-code-border'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {work.stack.split(', ').length > 3 && (
                    <span className={`px-2 py-1 text-xs font-mono rounded border transition-colors duration-300 ${
                      isDark 
                        ? 'bg-bg-tertiary text-accent border-code-border' 
                        : 'bg-light-bg-tertiary text-light-accent border-light-code-border'
                    }`}>
                      +{work.stack.split(', ').length - 3}
                    </span>
                  )}
                </div>
                
                {/* 役割表示 */}
                <div className="flex items-center space-x-2 mb-1">
                  <span className={`font-mono text-xs ${
                    isDark ? 'text-text-muted' : 'text-light-text-muted'
                  }`}>role:</span>
                  <span className={`text-xs ${
                    isDark ? 'text-text-sub' : 'text-light-text-sub'
                  }`}>{work.role}</span>
                </div>
                
                {/* 開発タイプ表示 */}
                {work.developmentType && (
                  <div className="flex items-center space-x-2">
                    <span className={`font-mono text-xs ${
                      isDark ? 'text-text-muted' : 'text-light-text-muted'
                    }`}>type:</span>
                    <span className={`text-xs px-2 py-1 rounded font-mono ${
                      work.developmentType === '個人開発' 
                        ? (isDark ? 'bg-secondary/20 text-secondary border border-secondary/30' : 'bg-light-secondary/20 text-light-secondary border border-light-secondary/30')
                        : (isDark ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-light-primary/20 text-light-primary border border-light-primary/30')
                    }`}>
                      {work.developmentType}
                    </span>
                  </div>
                )}
              </div>
              
              {/* ホバーエフェクト */}
              <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className={`w-2 h-2 rounded-full animate-pulse ${
                  isDark ? 'bg-primary' : 'bg-light-primary'
                }`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedWork && (
        <WorkModal
          work={selectedWork}
          onClose={() => setSelectedWork(null)}
        />
      )}
    </motion.section>
  );
};

export default Works;
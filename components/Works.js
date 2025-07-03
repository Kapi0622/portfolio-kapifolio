"use client"; // ← ブラウザで動かすためのおまじない（Next.jsのクライアントサイドレンダリング指定）

// Reactの状態管理フック（useStateはデータの状態を管理するために使用）
import { useState } from 'react';
// 作品詳細モーダルコンポーネントをインポート
import WorkModal from './WorkModal';
// Framer Motionをインポート
import { motion } from 'framer-motion';

// ★★★ ここにご自身の制作実績データを記載してください ★★★
// 制作実績のデータ配列（各作品の情報をオブジェクトで管理）
const worksData = [
  {
    id: 1,                                              // 一意のID（作品を識別するための番号）
    title: 'Kapifolio',                      // 作品タイトル（作品の名前）
    mainImage: '/images/work/kapifolio/kapifolio-image1.png',                   // メイン画像のパス（public/フォルダからの相対パス）
    images: ['/images/work/kapifolio/kapifolio-image1.png', '/images/profile.jpg', '/images/profile.jpg'], // 詳細画像の配列（モーダルで表示される画像群）
    description: '自身のスキルと制作実績をアピールするために作成したポートフォリオサイトです。', // 作品説明（この作品について詳しく説明）
    link: 'https://your-portfolio-url.com',             // 実際のサイトURL（作品の公開URL）
    stack: 'React, Next.js, Tailwind CSS, Vercel, FormSpree, LLM(gemini)',            // 使用技術（どの技術を使って作ったか）
    role: 'デザイン、フロントエンド開発',               // 担当領域（自分がどの部分を担当したか）
  },

  {
    id: 2,                                              // 一意のID（作品を識別するための番号）
    title: 'IoAミニゲーム班homepage',                      // 作品タイトル（作品の名前）
    mainImage: '/images/work/IoA-minigame/IoA-minigame-image1.png',                   // メイン画像のパス（public/フォルダからの相対パス）
    images: ['/images/work/kapifolio-image1.png', '/images/profile.jpg', '/images/profile.jpg'], // 詳細画像の配列（モーダルで表示される画像群）
    description: '私の所属する学生団体「IoAプロジェクト」内の少人数チーム「ミニゲーム班」の作品紹介サイトです。当サイトには、チームもしくは個人で制作したゲームのプレイが可能です。', // 作品説明（この作品について詳しく説明）
    link: 'https://your-portfolio-url.com',             // 実際のサイトURL（作品の公開URL）
    stack: 'HTML, CSS, javascript, formspree, Unity, C#',            // 使用技術（どの技術を使って作ったか）
    role: 'デザイン、フロントエンド開発、ゲーム開発',               // 担当領域（自分がどの部分を担当したか）
  },

  {
    id: 3,                                              // 一意のID（作品を識別するための番号）
    title: 'SAKITO',                      // 作品タイトル（作品の名前）
    mainImage: '/images/work/SAKITO/SAKITO.png',                   // メイン画像のパス（public/フォルダからの相対パス）
    images: ['/images/work/kapifolio-image1.png', '/images/profile.jpg', '/images/profile.jpg'], // 詳細画像の配列（モーダルで表示される画像群）
    description: 'SAKITOは、ユーザーがアンケート回答や1日1回のポイントガチャ、招待コードの利用・共有を通じてポイントを獲得できるウェブサイトです。獲得したポイントは引換券ガチャに使用でき、当選すると学食などで利用可能な引換券が手に入ります。私は、企画提案や組織運営・改善、メンバーマネジメントを主に担っています。エンジニアとしてもSAKITOにバリューを出すために、Ruby・Ruby on Railsをガッツリ学びたい。', // 作品説明（この作品について詳しく説明）
    link: 'https://your-portfolio-url.com',             // 実際のサイトURL（作品の公開URL）
    stack: 'Ruby, Ruby on Rails, MySQL, Docker, JavaScript, SCSS',            // 使用技術（どの技術を使って作ったか）
    role: 'PM(プロジェクトマネージャー)',               // 担当領域（自分がどの部分を担当したか）
  },


];

// 制作実績セクションのコンポーネント
const Works = () => {
  // 選択された作品の状態管理（null=何も選択されていない、オブジェクト=作品が選択されている）
  const [selectedWork, setSelectedWork] = useState(null);

  // アニメーション設定
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // 子要素を0.1秒ずつずらして表示
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // JSXを返す（制作実績セクションのUI構造）
  return (
    // 制作実績セクション - 背景透明で背景画像を表示
    <motion.section
      id="works"
      className="py-40 bg-gradient-to-br from-sky-50 to-blue-50 shadow-md p-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* セクションのタイトル */}
        <motion.h2
          className="text-6xl font-bold text-center mb-2 /*text-white*/ drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Works
        </motion.h2>
        <motion.p
          className="mt-2 mb-8 text-lg text-center text-text-sub"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          私が制作した、もしくは携わったプロダクトを紹介するぜ！
        </motion.p>        {/* グリッドレイアウトで作品カードを配置（レスポンシブ対応） */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {/* worksData配列の各作品をループで表示 */}
          {worksData.map((work, index) => (
            // 各作品のカード - カード全体を4:3の比率に設定
            <motion.div
              key={work.id}                                    // 一意のkey（Reactの要求）
              className="bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden cursor-pointer group backdrop-blur-sm aspect-[4/3] flex flex-col"
              onClick={() => setSelectedWork(work)}             // クリック時に作品を選択
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* 作品のメイン画像のコンテナ */}
              <div className="relative flex-1 w-full overflow-hidden">
                {/* 作品のメイン画像 */}
                <motion.img
                  src={work.mainImage}     // 画像のパス
                  alt={work.title}         // 代替テキスト（アクセシビリティ対応）
                  className="w-full h-full object-cover"
                  // whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              {/* 作品タイトル部分 - flexbox下部に固定配置 */}
              <div className="p-1 text-center flex-shrink-0">
                <h3 className="font-bold text-xl text-text-main ">{work.title}</h3>
                {/* <p className="text-sm text-text-sub truncate">{work.description}</p> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 条件付きレンダリング：作品が選択されている時のみモーダルを表示 */}
      {selectedWork && (
        <WorkModal
          work={selectedWork}                    // 選択された作品データを渡す
          onClose={() => setSelectedWork(null)}  // モーダルを閉じる関数を渡す
        />
      )}
    </motion.section>
  );
};

// このコンポーネントを他のファイルで使用できるようにエクスポート
export default Works;
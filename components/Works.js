"use client"; // ← ブラウザで動かすためのおまじない（Next.jsのクライアントサイドレンダリング指定）

// Reactの状態管理フック（useStateはデータの状態を管理するために使用）
import { useState } from 'react';
// 作品詳細モーダルコンポーネントをインポート
import WorkModal from './WorkModal';

// ★★★ ここにご自身の制作実績データを記載してください ★★★
// 制作実績のデータ配列（各作品の情報をオブジェクトで管理）
const worksData = [
  {
    id: 1,                                              // 一意のID（作品を識別するための番号）
    title: 'Kapifolio',                      // 作品タイトル（作品の名前）
    mainImage: '/images/work/kapifolio-image1.png',                   // メイン画像のパス（public/フォルダからの相対パス）
    images: ['/images/work/kapifolio-image1.png', '/images/profile.jpg', '/images/profile.jpg'], // 詳細画像の配列（モーダルで表示される画像群）
    description: '自身のスキルと制作実績をアピールするために作成したレスポンシブ対応のWebサイトです。', // 作品説明（この作品について詳しく説明）
    link: 'https://your-portfolio-url.com',             // 実際のサイトURL（作品の公開URL）
    stack: 'Next.js, Tailwind CSS, Vercel',            // 使用技術（どの技術を使って作ったか）
    role: 'デザイン、フロントエンド開発',               // 担当領域（自分がどの部分を担当したか）
  },

    {
    id: 2,                                              // 一意のID（作品を識別するための番号）
    title: 'Kapifolio',                      // 作品タイトル（作品の名前）
    mainImage: '/images/work/kapifolio-image1.png',                   // メイン画像のパス（public/フォルダからの相対パス）
    images: ['/images/work/kapifolio-image1.png', '/images/profile.jpg', '/images/profile.jpg'], // 詳細画像の配列（モーダルで表示される画像群）
    description: '自身のスキルと制作実績をアピールするために作成したレスポンシブ対応のWebサイトです。', // 作品説明（この作品について詳しく説明）
    link: 'https://your-portfolio-url.com',             // 実際のサイトURL（作品の公開URL）
    stack: 'Next.js, Tailwind CSS, Vercel',            // 使用技術（どの技術を使って作ったか）
    role: 'デザイン、フロントエンド開発',               // 担当領域（自分がどの部分を担当したか）
  },

    {
    id: 3,                                              // 一意のID（作品を識別するための番号）
    title: 'Kapifolio',                      // 作品タイトル（作品の名前）
    mainImage: '/images/work/kapifolio-image1.png',                   // メイン画像のパス（public/フォルダからの相対パス）
    images: ['/images/work/kapifolio-image1.png', '/images/profile.jpg', '/images/profile.jpg'], // 詳細画像の配列（モーダルで表示される画像群）
    description: '自身のスキルと制作実績をアピールするために作成したレスポンシブ対応のWebサイトです。', // 作品説明（この作品について詳しく説明）
    link: 'https://your-portfolio-url.com',             // 実際のサイトURL（作品の公開URL）
    stack: 'Next.js, Tailwind CSS, Vercel',            // 使用技術（どの技術を使って作ったか）
    role: 'デザイン、フロントエンド開発',               // 担当領域（自分がどの部分を担当したか）
  },
  // 他の制作実績もここに追加（同じ形式のオブジェクトを配列に追加）
  // 例：
  // {
  //   id: 2,
  //   title: 'ECサイト',
  //   mainImage: '/images/work2.jpg',
  //   images: ['/images/work2.jpg', '/images/work2-2.jpg'],
  //   description: 'オンラインショッピングサイトの開発',
  //   link: 'https://example-shop.com',
  //   stack: 'React, Node.js, MongoDB',
  //   role: 'フルスタック開発',
  // },
];

// 制作実績セクションのコンポーネント
const Works = () => {
  // 選択された作品の状態管理（null=何も選択されていない、オブジェクト=作品が選択されている）
  const [selectedWork, setSelectedWork] = useState(null);
  
  // JSXを返す（制作実績セクションのUI構造）
  return (
    // 制作実績セクション - 背景透明で背景画像を表示
    <section id="works" className="py-40 bg-gradient-to-br from-sky-50 to-blue-50 shadow-md p-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* セクションのタイトル */}
        <h2 className="text-6xl font-bold text-center mb-2 /*text-white*/ drop-shadow-lg">Works</h2>
        <p className="mt-2 mb-8 text-lg text-center text-text-sub">私が制作した、もしくは携わったプロダクトを紹介するぜ！</p>        {/* グリッドレイアウトで作品カードを配置（レスポンシブ対応） */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* worksData配列の各作品をループで表示 */}
          {worksData.map((work) => (            // 各作品のカード - カード全体を4:3の比率に設定
            <div 
              key={work.id}                                    // 一意のkey（Reactの要求）
              className="bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden cursor-pointer group transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl backdrop-blur-sm aspect-[4/3] flex flex-col" 
              onClick={() => setSelectedWork(work)}             // クリック時に作品を選択
            >
              {/* 作品のメイン画像のコンテナ */}
              <div className="relative flex-1 w-full overflow-hidden">
                {/* 作品のメイン画像 */}
                <img 
                  src={work.mainImage}     // 画像のパス
                  alt={work.title}         // 代替テキスト（アクセシビリティ対応）
                  className="w-full h-full object-cover transition-transform duration-500" 
                />
              </div>              {/* 作品タイトル部分 - flexbox下部に固定配置 */}
              <div className="p-1 text-center flex-shrink-0">
                <h3 className="font-bold text-xl text-text-main ">{work.title}</h3>
                {/* <p className="text-sm text-text-sub truncate">{work.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 条件付きレンダリング：作品が選択されている時のみモーダルを表示 */}
      {selectedWork && (
        <WorkModal 
          work={selectedWork}                    // 選択された作品データを渡す
          onClose={() => setSelectedWork(null)}  // モーダルを閉じる関数を渡す
        />
      )}
    </section>
  );
};

// このコンポーネントを他のファイルで使用できるようにエクスポート
export default Works;
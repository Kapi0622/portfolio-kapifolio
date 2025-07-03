"use client"; // ← ブラウザで動かすためのおまじない（Next.jsのクライアントコンポーネント宣言）

// Swiperライブラリから必要なコンポーネントをインポート（画像スライダー機能）
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiperのナビゲーション（前へ・次へボタン）とページネーション（ドット）機能
import { Navigation, Pagination } from 'swiper/modules';
// アイコンライブラリから閉じるアイコンとリンクアイコンをインポート
import { FiX, FiLink } from 'react-icons/fi';

// 作品詳細モーダルコンポーネント（ポップアップで作品詳細を表示）
// work: 表示する作品データ、onClose: モーダルを閉じる関数
const WorkModal = ({ work, onClose }) => {
  // オーバーレイクリック時の処理（モーダル内容をクリックした場合は閉じない）
  const handleOverlayClick = (e) => {
    // クリックされた要素がオーバーレイ自身の場合のみ閉じる
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // JSXを返す（モーダルのUI構造）
  return (
    // モーダルの背景オーバーレイ（画面全体を覆う半透明の黒い背景）
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      {/* モーダルのメインコンテンツ */}
      <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto relative">
        
        {/* 閉じるボタン（右上に配置） */}
        <button 
          onClick={onClose}                              // クリック時にモーダルを閉じる
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10"
        >
          <FiX size={28} />
        </button>
        
        {/* 画像スライダー部分 */}
        <Swiper 
          modules={[Navigation, Pagination]}              // ナビゲーションとページネーション機能を有効化
          spaceBetween={50}                              // スライド間の余白
          slidesPerView={1}                              // 一度に表示するスライド数
          navigation                                     // 前へ・次へボタンを有効化
          pagination={{ clickable: true }}              // クリック可能なページネーションドットを有効化
        >
          {/* work.images配列の各画像をスライドとして表示 */}
          {work.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img 
                src={image}                              // 画像のパス
                alt={`${work.title} screen shot ${index + 1}`} // 代替テキスト
                className="w-full h-auto object-contain max-h-96" // スタイリング
              />
            </SwiperSlide>
          ))}
        </Swiper>        
        {/* 作品詳細情報部分 */}
        <div className="p-8">
          {/* 作品タイトル */}
          <h3 className="text-2xl font-bold mb-4">{work.title}</h3>
          
          {/* 作品説明 */}
          <p className="text-text-sub mb-6">{work.description}</p>
          
          {/* 詳細情報のリスト */}
          <div className="space-y-4">
            {/* 担当領域 */}
            <div>
              <h4 className="font-bold">担当領域</h4>
              <p className="text-text-sub">{work.role}</p>
            </div>
            
            {/* 技術スタック */}
            <div>
              <h4 className="font-bold">主な技術スタック</h4>
              <p className="text-text-sub">{work.stack}</p>
            </div>
            
            {/* 外部リンク（条件付きで表示） */}
            {work.link && (
              <div>
                <h4 className="font-bold">リンク</h4>
                <a 
                  href={work.link}                        // リンク先URL
                  target="_blank"                         // 新しいタブで開く
                  rel="noopener noreferrer"               // セキュリティ対策
                  className="flex items-center text-primary hover:underline" // スタイリング
                >
                  <FiLink className="mr-2" />             {/* リンクアイコン */}
                  <span>サイトを見る</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// このコンポーネントを他のファイルで使用できるようにエクスポート
export default WorkModal;
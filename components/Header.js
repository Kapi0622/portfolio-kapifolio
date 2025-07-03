"use client"; // ← ブラウザで動かすためのおまじない（Next.jsのクライアントコンポーネント宣言）

// Reactの機能をインポート（useStateはデータの状態管理に使用、useEffectは副作用処理に使用）
import { useState, useEffect } from 'react';
// アイコンライブラリからメニューアイコンとXアイコンをインポート
import { FiMenu, FiX } from 'react-icons/fi';
// Framer Motionをインポート
import { motion, AnimatePresence } from 'framer-motion';

// ヘッダーコンポーネントの定義（サイト上部のナビゲーション部分）
const Header = () => {
  // モバイルメニューの開閉状態を管理する変数
  // isOpen: 現在の状態（true=開いている、false=閉じている）
  // setIsOpen: 状態を変更するための関数
  const [isOpen, setIsOpen] = useState(false);
  
  // スクロール状態を管理する変数
  // isScrolled: 現在の状態（true=スクロールされている、false=ページ上部）
  // setIsScrolled: 状態を変更するための関数
  const [isScrolled, setIsScrolled] = useState(false);

  // スクロール検知の処理
  useEffect(() => {
    const handleScroll = () => {
      // ページを50px以上スクロールしたらisScrolledをtrueに設定
      setIsScrolled(window.scrollY > 50);
    };

    // スクロールイベントリスナーを追加
    window.addEventListener('scroll', handleScroll);

    // コンポーネントがアンマウントされる時にイベントリスナーを削除（メモリリーク防止）
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // 空の依存配列なので、マウント時に一度だけ実行
    // ナビゲーションリンクの配列（メニュー項目のデータ）
  const navLinks = [
    { name: 'このサイトについて', href: '#about-site' }, // サイト紹介セクションへのリンク
    { name: '自己紹介', href: '#about-me' },          // 自己紹介セクションへのリンク
    { name: '成果物', href: '#works' },                // 制作物セクションへのリンク
    { name: '略歴', href: '#profile' },            // プロフィールセクションへのリンク
    { name: 'お問い合わせ', href: '#contact' },            // お問い合わせセクションへのリンク
  ];

  // アニメーション設定
  const mobileMenuVariants = {
    hidden: { 
      x: '100%',
      opacity: 0
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };
  // JSXを返す（HTMLのような記法でUI構造を定義）
  return (
    // ヘッダー要素（画面上部に固定表示される）
    // スクロール時に背景を半透明に変更（ただし、ハンバーガーメニューが開いている時は常に不透明）
    <motion.header 
      className={`shadow-md sticky top-0 z-50 transition-all duration-300 ${
        isOpen 
          ? 'bg-white' // ハンバーガーメニューが開いている時は常に不透明
          : isScrolled 
            ? 'bg-white bg-opacity-50 backdrop-blur-md' 
            : 'bg-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* 最大幅を設定し、中央寄せにするコンテナ */}
      <div className="max-w-4xl mx-auto px-4">
        {/* フレックスボックスでロゴとメニューを横並びに配置 */}
        <div className="flex items-center justify-between h-16">
            {/* ロゴ部分 */}
          <motion.div 
            className="flex-1 md:flex-initial"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.a 
              href="#top" 
              className="text-2xl font-bold text-primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Kapifolio
            </motion.a>
          </motion.div>            {/* デスクトップ用ナビゲーション（画面サイズがmd以上の時に表示） */}
          <nav className="hidden md:flex space-x-6">
            {/* navLinks配列の各項目をループで表示 */}
            {navLinks.map((link, index) => (
              <motion.a 
                key={link.name} 
                href={link.href} 
                className="text-text-sub hover:text-primary transition"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.15 } // アニメーション速度を上げる
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>
          
          {/* モバイル用ハンバーガーメニューボタン（画面サイズがmd未満の時に表示） */}
          <div className="md:hidden">
            <motion.button 
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* 三項演算子：isOpenがtrueならXアイコン、falseならメニューアイコンを表示 */}
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>        {/* モバイル用スライドメニュー（画面右側から出現） */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* オーバーレイ（背景クリックで閉じる） */}
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />              {/* メニュー本体 */}
            <motion.div 
              className="fixed top-0 right-0 h-full bg-white shadow-xl z-40 md:hidden w-64 border-l border-gray-200"
              style={{ backgroundColor: 'white' }} // 確実に白い背景を適用
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
            {/* メニューヘッダー - 閉じるボタン */}
            <div className="flex justify-end p-4">
              <motion.button 
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-gray-800"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <FiX size={28} />
              </motion.button>
            </div>
            
            {/* メニュー内のパディング調整 */}
            <div className="px-6">
              {/* モバイル用ナビゲーションリンク（縦並び） */}
              <nav className="flex flex-col space-y-4">                {navLinks.map((link, index) => (
                  <motion.a 
                    key={link.name} 
                    href={link.href} 
                    className="text-lg text-text-sub hover:text-primary transition" 
                    onClick={() => setIsOpen(false)} // リンククリック時にメニューを閉じる                    custom={index}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ 
                      x: 10, 
                      color: "#0ea5e9",
                      transition: { duration: 0.1 } // アニメーション速度を大幅に上げる
                    }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

// このコンポーネントを他のファイルで使用できるようにエクスポート
export default Header;
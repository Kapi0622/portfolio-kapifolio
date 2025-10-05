"use client"; // ← ブラウザで動かすためのおまじない（Next.jsのクライアントコンポーネント宣言）

// Reactの機能をインポート（useStateはデータの状態管理に使用、useEffectは副作用処理に使用）
import { useState, useEffect } from 'react';
// アイコンライブラリからメニューアイコンとXアイコン、テーマ切り替えアイコンをインポート
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
// Framer Motionをインポート
import { motion, AnimatePresence } from 'framer-motion';
// テーマコンテキストをインポート
import { useTheme } from '../src/contexts/ThemeContext';

// ヘッダーコンポーネントの定義（サイト上部のナビゲーション部分）
const Header = ({ isPartyActive, setIsPartyActive }) => {
  // テーマコンテキストの取得
  const { isDark, toggleTheme } = useTheme();
  
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
    <motion.header 
      className={`shadow-md sticky top-0 z-50 transition-all duration-300 ${
        isOpen 
          ? `${isDark ? 'bg-bg-primary border-b border-code-border' : 'bg-light-bg-primary border-b border-light-code-border'}`
          : isScrolled 
            ? `${isDark ? 'bg-bg-primary bg-opacity-95 backdrop-blur-md border-b border-code-border' : 'bg-light-bg-primary bg-opacity-95 backdrop-blur-md border-b border-light-code-border'}`
            : `${isDark ? 'bg-bg-primary bg-opacity-80' : 'bg-light-bg-primary bg-opacity-80'}`
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* 最大幅を設定し、中央寄せにするコンテナ */}
      <div className="max-w-5xl mx-auto px-4">
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
              className={`text-2xl font-bold font-mono ${
                isDark ? 'text-primary' : 'text-light-primary'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={isDark ? 'text-terminal-green' : 'text-light-terminal-green'}>$</span> Kapifolio<span className={`${isDark ? 'text-accent' : 'text-light-accent'} animate-pulse`}>_</span>
            </motion.a>
          </motion.div>          {/* デスクトップ用ナビゲーション（画面サイズがmd以上の時に表示） */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              {/* navLinks配列の各項目をループで表示 */}
              {navLinks.map((link, index) => (
                <motion.a 
                  key={link.name} 
                  href={link.href} 
                  className={`${
                    isDark 
                      ? 'text-text-sub hover:text-primary' 
                      : 'text-light-text-sub hover:text-light-primary'
                  } transition font-mono text-base relative group`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.15 } // アニメーション速度を上げる
                  }}
                >
                  <span className={`${
                    isDark ? 'text-terminal-green' : 'text-light-terminal-green'
                  } opacity-0 group-hover:opacity-100 transition-opacity`}>→ </span>
                  {link.name}
                  <div className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                    isDark ? 'bg-primary' : 'bg-light-primary'
                  } group-hover:w-full transition-all duration-300`}></div>
                </motion.a>
              ))}
            </nav>
            
            {/* テーマ切り替えボタン */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 group border ${
                isDark 
                  ? 'hover:bg-bg-tertiary border-code-border' 
                  : 'hover:bg-light-bg-tertiary border-light-code-border'
              }`}
              whileHover={{ 
                scale: 1.1, 
                borderColor: isDark ? "#10b981" : "#0ea5e9",
                rotate: 180
              }}
              whileTap={{ scale: 0.9 }}
              title={isDark ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
            >
              <motion.div
                initial={false}
                animate={{ 
                  rotate: isDark ? 0 : 180,
                  color: isDark ? "#f59e0b" : "#dc2626"
                }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
              </motion.div>
            </motion.button>
            
            {/* パーティモードボタン */}
            <motion.button
              onClick={() => setIsPartyActive(!isPartyActive)}
              className={`p-2 rounded-lg transition-all duration-300 group border ${
                isPartyActive
                  ? isDark
                    ? 'bg-accent border-accent'
                    : 'bg-light-accent border-light-accent'
                  : isDark 
                    ? 'hover:bg-bg-tertiary border-code-border' 
                    : 'hover:bg-light-bg-tertiary border-light-code-border'
              }`}
              whileHover={{ 
                scale: 1.1, 
                borderColor: isPartyActive ? "#f472b6" : (isDark ? "#10b981" : "#0ea5e9"),
              }}
              whileTap={{ scale: 0.9, rotate: 15 }}
              title={isPartyActive ? 'パーティモードを停止' : 'パーティモードを開始'}
            >
              <motion.div
                animate={{ 
                  rotate: isPartyActive ? [0, 10, -10, 10, 0] : 0,
                }}
                transition={{ 
                  duration: 0.5,
                  repeat: isPartyActive ? Infinity : 0,
                  repeatDelay: 0.2
                }}
              >
                🎉
              </motion.div>
            </motion.button>
          </div>
          
          {/* モバイル用ハンバーガーメニューボタンとテーマ切り替え（画面サイズがmd未満の時に表示） */}
          <div className="md:hidden flex items-center space-x-2">
            {/* モバイル用テーマ切り替えボタン */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 border ${
                isDark 
                  ? 'hover:bg-bg-tertiary border-code-border' 
                  : 'hover:bg-light-bg-tertiary border-light-code-border'
              }`}
              whileHover={{ 
                scale: 1.1, 
                borderColor: isDark ? "#10b981" : "#0ea5e9"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ 
                  rotate: isDark ? 0 : 180,
                  color: isDark ? "#f59e0b" : "#dc2626"
                }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
              </motion.div>
            </motion.button>
            
            {/* モバイル用パーティモードボタン */}
            <motion.button
              onClick={() => setIsPartyActive(!isPartyActive)}
              className={`p-2 rounded-lg transition-all duration-300 border ${
                isPartyActive
                  ? isDark
                    ? 'bg-accent border-accent'
                    : 'bg-light-accent border-light-accent'
                  : isDark 
                    ? 'hover:bg-bg-tertiary border-code-border' 
                    : 'hover:bg-light-bg-tertiary border-light-code-border'
              }`}
              whileHover={{ 
                scale: 1.1, 
                borderColor: isPartyActive ? "#f472b6" : (isDark ? "#10b981" : "#0ea5e9"),
              }}
              whileTap={{ scale: 0.9, rotate: 15 }}
            >
              <motion.div
                animate={{ 
                  rotate: isPartyActive ? [0, 10, -10, 10, 0] : 0,
                }}
                transition={{ 
                  duration: 0.5,
                  repeat: isPartyActive ? Infinity : 0,
                  repeatDelay: 0.2
                }}
              >
                🎉
              </motion.div>
            </motion.button>
            
            {/* ハンバーガーメニューボタン */}
            <motion.button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition border ${
                isDark 
                  ? 'text-text-main hover:bg-bg-tertiary border-code-border' 
                  : 'text-light-text-main hover:bg-light-bg-tertiary border-light-code-border'
              }`}
              whileHover={{ 
                scale: 1.1, 
                borderColor: isDark ? "#10b981" : "#0ea5e9" 
              }}
              whileTap={{ scale: 0.9 }}
            >
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
              className={`fixed top-0 right-0 h-full shadow-xl z-40 md:hidden w-64 border-l ${
                isDark 
                  ? 'bg-bg-primary border-code-border' 
                  : 'bg-light-bg-primary border-light-code-border'
              }`}
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
            {/* メニューヘッダー - 閉じるボタン */}
            <div className="flex justify-end p-4">
              <motion.button 
                onClick={() => setIsOpen(false)}
                className={`${
                  isDark 
                    ? 'text-text-muted hover:text-text-main' 
                    : 'text-light-text-muted hover:text-light-text-main'
                }`}
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
                    className={`text-lg transition ${
                      isDark 
                        ? 'text-text-sub hover:text-primary' 
                        : 'text-light-text-sub hover:text-light-primary'
                    }`}
                    onClick={() => setIsOpen(false)} // リンククリック時にメニューを閉じる                    custom={index}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ 
                      x: 10, 
                      color: isDark ? "#10b981" : "#0ea5e9",
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
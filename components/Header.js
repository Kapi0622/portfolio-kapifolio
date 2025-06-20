"use client"; // ← ブラウザで動かすためのおまじない（Next.jsのクライアントコンポーネント宣言）

// Reactの機能をインポート（useStateはデータの状態管理に使用、useEffectは副作用処理に使用）
import { useState, useEffect } from 'react';
// アイコンライブラリからメニューアイコンとXアイコンをインポート
import { FiMenu, FiX } from 'react-icons/fi';

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
  ];  // JSXを返す（HTMLのような記法でUI構造を定義）
  return (
    // ヘッダー要素（画面上部に固定表示される）
    // スクロール時に背景を半透明に変更
    <header className={`shadow-md sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white bg-opacity-50 backdrop-blur-md' 
        : 'bg-white'
    }`}>
      {/* 最大幅を設定し、中央寄せにするコンテナ */}
      <div className="max-w-4xl mx-auto px-4">
        {/* フレックスボックスでロゴとメニューを横並びに配置 */}
        <div className="flex items-center justify-between h-16">
          
          {/* ロゴ部分 */}          <div className="flex-1 md:flex-initial">
            <a href="#top" className="text-2xl font-bold text-primary">Kapifolio</a>
          </div>
          
          {/* デスクトップ用ナビゲーション（画面サイズがmd以上の時に表示） */}
          <nav className="hidden md:flex space-x-6">
            {/* navLinks配列の各項目をループで表示 */}
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-text-sub hover:text-primary transition">
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* モバイル用ハンバーガーメニューボタン（画面サイズがmd未満の時に表示） */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {/* 三項演算子：isOpenがtrueならXアイコン、falseならメニューアイコンを表示 */}
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>      
      {/* モバイル用スライドメニュー（画面右側から出現） */}
      <div className={`fixed top-0 right-0 h-full bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden w-64`}>
        {/* メニュー内のパディング調整 */}
        <div className="pt-20 px-6">
          {/* モバイル用ナビゲーションリンク（縦並び） */}
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg text-text-sub hover:text-primary transition" 
                onClick={() => setIsOpen(false)} // リンククリック時にメニューを閉じる
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

// このコンポーネントを他のファイルで使用できるようにエクスポート
export default Header;
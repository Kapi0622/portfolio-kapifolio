// フッターコンポーネント（サイト下部に表示される著作権表示）
const Footer = () => {
  // JSXを返す（フッターのUI構造）
  return (
    // フッター要素（灰色の背景、白いテキスト、中央寄せ）
    <footer className="bg-gray-800 text-white text-center p-4">
      {/* 著作権表示（現在の年を自動取得） */}
      <p>
        © {new Date().getFullYear()} Kapifolio. All Rights Reserved.
        {/* new Date().getFullYear() で現在の年を取得（例：2025） */}
      </p>
    </footer>
  );
};

// このコンポーネントを他のファイルで使用できるようにエクスポート
export default Footer;
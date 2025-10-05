"use client"; // ← ブラウザで動かすためのおまじない（Next.jsのクライアントコンポーネント宣言）

// Swiperライブラリから必要なコンポーネントをインポート（画像スライダー機能）
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiperのナビゲーション（前へ・次へボタン）とページネーション（ドット）機能
import { Navigation, Pagination } from 'swiper/modules';
// アイコンライブラリから閉じるアイコンとリンクアイコンをインポート
import { FiX, FiLink } from 'react-icons/fi';
// テーマコンテキストをインポート
import { useTheme } from '../src/contexts/ThemeContext';

// 作品詳細モーダルコンポーネント（ポップアップで作品詳細を表示）
// work: 表示する作品データ、onClose: モーダルを閉じる関数
const WorkModal = ({ work, onClose }) => {
  const { isDark } = useTheme();
  // オーバーレイクリック時の処理（モーダル内容をクリックした場合は閉じない）
  const handleOverlayClick = (e) => {
    // クリックされた要素がオーバーレイ自身の場合のみ閉じる
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // JSXを返す（モーダルのUI構造）
  return (
    // モーダルの背景オーバーレイ（画面全体を覆う半透明の背景）
    <div
      className={`fixed inset-0 flex justify-center items-center z-50 p-4 transition-colors duration-300 ${
        isDark ? 'bg-black bg-opacity-80' : 'bg-gray-900 bg-opacity-50'
      }`}
      onClick={handleOverlayClick}
    >
      {/* エディタ風モーダルのメインコンテンツ */}
      <div className={`border rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden relative shadow-2xl transition-colors duration-300 ${
        isDark 
          ? 'bg-code-bg border-code-border' 
          : 'bg-light-code-bg border-light-code-border'
      }`}>

        {/* VS Code風のタイトルバー */}
        <div className={`px-4 py-3 flex items-center justify-between border-b transition-colors duration-300 ${
          isDark 
            ? 'bg-bg-tertiary border-code-border' 
            : 'bg-light-bg-tertiary border-light-code-border'
        }`}>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className={`w-3 h-3 rounded-full ${
              isDark ? 'bg-primary' : 'bg-light-primary'
            }`}></div>
            <span className={`text-sm font-mono ml-4 transition-colors duration-300 ${
              isDark ? 'text-text-muted' : 'text-light-text-muted'
            }`}>{work.title}.project</span>
          </div>

          {/* 閉じるボタン */}
          <button
            onClick={onClose}
            className={`p-1 transition-colors duration-300 ${
              isDark 
                ? 'text-text-muted hover:text-white' 
                : 'text-light-text-muted hover:text-light-text-main'
            }`}
          >
            <FiX size={20} />
          </button>
        </div>

        {/* エディタのタブエリア */}
        <div className={`px-4 py-2 border-b transition-colors duration-300 ${
          isDark 
            ? 'bg-bg-secondary border-code-border' 
            : 'bg-light-bg-secondary border-light-code-border'
        }`}>
          <div className="flex items-center space-x-4">
            <div className={`px-3 py-1 rounded-t text-sm font-mono border-t-2 transition-colors duration-300 ${
              isDark 
                ? 'bg-code-bg text-white border-primary' 
                : 'bg-light-code-bg text-light-text-main border-light-primary'
            }`}>
              README.md
            </div>
            <div className={`px-3 py-1 text-sm font-mono cursor-pointer transition-colors duration-300 ${
              isDark 
                ? 'text-text-muted hover:text-white' 
                : 'text-light-text-muted hover:text-light-text-main'
            }`}>
              gallery/
            </div>
            <div className={`px-3 py-1 text-sm font-mono cursor-pointer transition-colors duration-300 ${
              isDark 
                ? 'text-text-muted hover:text-white' 
                : 'text-light-text-muted hover:text-light-text-main'
            }`}>
              specs.json
            </div>
          </div>
        </div>

        <div className="flex h-full max-h-[calc(90vh-120px)]">
          {/* サイドバー（ファイルエクスプローラ風） */}
          <div className={`w-64 border-r p-4 overflow-y-auto transition-colors duration-300 ${
            isDark 
              ? 'bg-bg-secondary border-code-border' 
              : 'bg-light-bg-secondary border-light-code-border'
          }`}>
            <div className={`text-xs font-mono mb-4 transition-colors duration-300 ${
              isDark ? 'text-text-muted' : 'text-light-text-muted'
            }`}>PROJECT EXPLORER</div>

            <div className="space-y-2 text-sm font-mono">
              <div className={`flex items-center space-x-2 transition-colors duration-300 ${
                isDark ? 'text-primary' : 'text-light-primary'
              }`}>
                <span className={isDark ? 'text-accent' : 'text-light-accent'}>📁</span>
                <span>{work.title}</span>
              </div>
              <div className="pl-6 space-y-1">
                <div className={`flex items-center space-x-2 cursor-pointer transition-colors duration-300 ${
                  isDark 
                    ? 'text-terminal-green hover:text-white' 
                    : 'text-light-terminal-green hover:text-light-text-main'
                }`}>
                  <span className={isDark ? 'text-accent' : 'text-light-accent'}>📄</span>
                  <span>README.md</span>
                </div>
                <div className={`flex items-center space-x-2 cursor-pointer transition-colors duration-300 ${
                  isDark 
                    ? 'text-text-muted hover:text-white' 
                    : 'text-light-text-muted hover:text-light-text-main'
                }`}>
                  <span className={isDark ? 'text-accent' : 'text-light-accent'}>📁</span>
                  <span>gallery/</span>
                </div>
                {work.images && work.images.length > 0 && (
                  <div className="pl-6 space-y-1">
                    {work.images.map((_, index) => (
                      <div key={index} className={`flex items-center space-x-2 cursor-pointer transition-colors duration-300 ${
                        isDark 
                          ? 'text-text-muted hover:text-white' 
                          : 'text-light-text-muted hover:text-light-text-main'
                      }`}>
                        <span className={isDark ? 'text-accent' : 'text-light-accent'}>🖼️</span>
                        <span>screenshot_{index + 1}.png</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className={`flex items-center space-x-2 cursor-pointer transition-colors duration-300 ${
                  isDark 
                    ? 'text-text-muted hover:text-white' 
                    : 'text-light-text-muted hover:text-light-text-main'
                }`}>
                  <span className={isDark ? 'text-accent' : 'text-light-accent'}>⚙️</span>
                  <span>specs.json</span>
                </div>
              </div>
            </div>

            {/* Git情報 */}
            <div className={`mt-6 pt-4 border-t transition-colors duration-300 ${
              isDark ? 'border-code-border' : 'border-light-code-border'
            }`}>
              <div className={`text-xs font-mono mb-2 transition-colors duration-300 ${
                isDark ? 'text-text-muted' : 'text-light-text-muted'
              }`}>GIT STATUS</div>
              <div className={`text-xs font-mono flex items-center space-x-1 transition-colors duration-300 ${
                isDark ? 'text-terminal-green' : 'text-light-terminal-green'
              }`}>
                <span className={`w-2 h-2 rounded-full ${
                  isDark ? 'bg-terminal-green' : 'bg-light-terminal-green'
                }`}></span>
                <span>main</span>
              </div>
            </div>
          </div>

          {/* メインコンテンツエリア */}
          <div className="flex-1 overflow-y-auto">
            {/* README.md風の内容表示 */}
            <div className="p-6 font-mono text-sm">
              <div className="space-y-6">
                {/* マークダウン風ヘッダー */}
                <div className={`border-b pb-4 transition-colors duration-300 ${
                  isDark ? 'border-code-border' : 'border-light-code-border'
                }`}>
                  <h1 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-light-text-main'
                  }`}>
                    <span className={isDark ? 'text-accent' : 'text-light-accent'}>#</span> {work.title}
                  </h1>
                  <p className={`leading-relaxed transition-colors duration-300 ${
                    isDark ? 'text-text-sub' : 'text-light-text-sub'
                  }`}>{work.description}</p>
                </div>

                {/* 画像ギャラリー */}
                {work.images && work.images.length > 0 && (
                  <div className="mb-6">
                    <h2 className={`text-lg font-bold mb-4 transition-colors duration-300 ${
                      isDark ? 'text-terminal-green' : 'text-light-terminal-green'
                    }`}>
                      <span className={isDark ? 'text-accent' : 'text-light-accent'}>##</span> Screenshots
                    </h2>
                    <div className={`border rounded p-4 transition-colors duration-300 ${
                      isDark 
                        ? 'bg-bg-secondary border-code-border' 
                        : 'bg-light-bg-secondary border-light-code-border'
                    }`}>
                      <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{
                          clickable: true,
                          dynamicBullets: true
                        }}
                        className="rounded overflow-hidden"
                      >
                        {work.images.map((image, index) => (
                          <SwiperSlide key={index}>
                            <div className="relative">
                              <img
                                src={image}
                                alt={`${work.title} screen shot ${index + 1}`}
                                className={`w-full h-auto object-contain max-h-80 rounded border transition-colors duration-300 ${
                                  isDark ? 'border-code-border' : 'border-light-code-border'
                                }`}
                              />
                              <div className={`absolute bottom-2 right-2 text-xs px-2 py-1 rounded font-mono transition-colors duration-300 ${
                                isDark 
                                  ? 'bg-bg-tertiary text-text-muted' 
                                  : 'bg-light-bg-tertiary text-light-text-muted'
                              }`}>
                                {index + 1} / {work.images.length}
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                )}

                {/* プロジェクト仕様 */}
                <div className="space-y-4">
                  <h2 className={`text-lg font-bold transition-colors duration-300 ${
                    isDark ? 'text-terminal-green' : 'text-light-terminal-green'
                  }`}>
                    <span className={isDark ? 'text-accent' : 'text-light-accent'}>##</span> Project Specifications
                  </h2>

                  {/* <div className="bg-bg-secondary border border-code-border rounded p-4">
                    <pre className="text-xs text-text-sub">
                      {`{
                          "project": "${work.title}",
                          "role": "${work.role}",
                          "technologies": "${work.stack}",${work.links && work.links.length > 0 ? `
                          "links": [${work.links.map(link => `"${link.url}"`).join(', ')}],` : ''}
                          "status": "completed"
                      }`}
                    </pre>
                  </div> */}

                  {/* 開発体制・チーム情報 */}
                  {work.developmentType && (
                    <div className={`border-l-4 pl-4 transition-colors duration-300 ${
                      isDark 
                        ? 'bg-code-bg border-accent' 
                        : 'bg-light-code-bg border-light-accent'
                    }`}>
                      <h3 className={`font-bold mb-2 transition-colors duration-300 ${
                        isDark ? 'text-accent' : 'text-light-accent'
                      }`}>
                        <span className={isDark ? 'text-accent' : 'text-light-accent'}>###</span> Development Type & Team
                      </h3>
                      <div className="space-y-1">
                        <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                          isDark ? 'text-text-sub' : 'text-light-text-sub'
                        }`}>
                          <span className={`font-mono transition-colors duration-300 ${
                            isDark ? 'text-terminal-green' : 'text-light-terminal-green'
                          }`}>Type:</span> {work.developmentType}
                        </p>
                        {work.teamInfo && (
                          <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                            isDark ? 'text-text-sub' : 'text-light-text-sub'
                          }`}>
                            <span className={`font-mono transition-colors duration-300 ${
                              isDark ? 'text-terminal-green' : 'text-light-terminal-green'
                            }`}>Team:</span> {work.teamInfo}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* 担当領域 */}
                  <div className={`border-l-4 pl-4 transition-colors duration-300 ${
                    isDark 
                      ? 'bg-code-bg border-primary' 
                      : 'bg-light-code-bg border-light-primary'
                  }`}>
                    <h3 className={`font-bold mb-2 transition-colors duration-300 ${
                      isDark ? 'text-primary' : 'text-light-primary'
                    }`}>
                      <span className={isDark ? 'text-accent' : 'text-light-accent'}>###</span> Role & Responsibilities
                    </h3>
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                      isDark ? 'text-text-sub' : 'text-light-text-sub'
                    }`}>{work.role}</p>
                  </div>

                  {/* 技術スタック */}
                  <div className={`border-l-4 pl-4 transition-colors duration-300 ${
                    isDark 
                      ? 'bg-code-bg border-terminal-green' 
                      : 'bg-light-code-bg border-light-terminal-green'
                  }`}>
                    <h3 className={`font-bold mb-2 transition-colors duration-300 ${
                      isDark ? 'text-terminal-green' : 'text-light-terminal-green'
                    }`}>
                      <span className={isDark ? 'text-accent' : 'text-light-accent'}>###</span> Tech Stack
                    </h3>
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                      isDark ? 'text-text-sub' : 'text-light-text-sub'
                    }`}>{work.stack}</p>
                  </div>

                  {/* 具体的な活動・実装範囲 */}
                  {work.activities && work.activities.length > 0 && (
                    <div className={`border-l-4 pl-4 transition-colors duration-300 ${
                      isDark 
                        ? 'bg-code-bg border-secondary' 
                        : 'bg-light-code-bg border-light-secondary'
                    }`}>
                      <h3 className={`font-bold mb-3 transition-colors duration-300 ${
                        isDark ? 'text-secondary' : 'text-light-secondary'
                      }`}>
                        <span className={isDark ? 'text-accent' : 'text-light-accent'}>###</span> Key Activities & Implementation
                      </h3>
                      <ul className={`text-sm leading-relaxed space-y-2 transition-colors duration-300 ${
                        isDark ? 'text-text-sub' : 'text-light-text-sub'
                      }`}>
                        {work.activities.map((activity, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className={`font-mono text-xs mt-1 transition-colors duration-300 ${
                              isDark ? 'text-accent' : 'text-light-accent'
                            }`}>•</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* 外部リンク */}
                  {work.links && work.links.length > 0 && (
                    <div className={`border rounded p-4 transition-colors duration-300 ${
                      isDark 
                        ? 'bg-bg-secondary border-code-border' 
                        : 'bg-light-bg-secondary border-light-code-border'
                    }`}>
                      <h3 className={`font-bold mb-3 transition-colors duration-300 ${
                        isDark ? 'text-accent' : 'text-light-accent'
                      }`}>
                        <span className={isDark ? 'text-terminal-green' : 'text-light-terminal-green'}>###</span> Links
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {work.links.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center space-x-2 px-4 py-2 rounded font-mono text-sm transition-all duration-300 group ${
                              isDark 
                                ? 'bg-primary hover:bg-primary/80 text-black' 
                                : 'bg-light-primary hover:bg-light-primary/80 text-white'
                            }`}
                          >
                            <FiLink size={16} />
                            <span>{link.text}</span>
                            <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// このコンポーネントを他のファイルで使用できるようにエクスポート
export default WorkModal;
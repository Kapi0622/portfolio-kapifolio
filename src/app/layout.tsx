import './globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const metadata = {
  title: 'Kapifolio - ポートフォリオサイト',
  description: '自身の創作物を掲載し、スキルを紹介するためのサイトです。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body 
        className="bg-background font-body text-text-main"
        style={{
          backgroundImage: 'url(/images/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {children}
      </body>
    </html>
  );
}
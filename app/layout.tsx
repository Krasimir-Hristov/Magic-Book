import type { Metadata } from 'next';
import './globals.css';
import Provider from './Provider';

// Импортирай Fredoka и Poppins от Google Fonts
import { Fredoka, Poppins } from 'next/font/google';

const FredokaFont = Fredoka({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const PoppinsFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Magic Book',
  description: 'Create personalized children’s books with AI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      {/* Приложи Poppins като основен шрифт */}
      <body className={`${PoppinsFont.className} font-body`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

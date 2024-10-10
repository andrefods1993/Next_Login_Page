import type { Metadata } from 'next';
import { ConfigProvider } from 'antd';
import { Roboto } from 'next/font/google';
import StyleRegistry from './StyleRegistry';
import 'normalize.css';
import GlobalStyles from '@/styles/GlobalStyles';

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  fallback: ['sans-serif', 'Arial', 'Helvetica'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Login Page',
  description: 'Página de login usando o framework Next.js.',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="pt-BR" className={roboto.className}>
      <body>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#116c74',
              colorBgBase: '#f5f5f5',
            },
          }}
        >
          <StyleRegistry>
            <GlobalStyles />
            {children}
          </StyleRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
};

export default RootLayout;

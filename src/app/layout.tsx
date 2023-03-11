import { type Metadata } from 'next';

import { StyledComponentsRegistry } from 'lib/registry';

import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Boilerplate',
  description: 'A simple project starter',
  icons: {
    shortcut: ['/img/icon-512.png'],
    apple: [{ url: '/img/icon-512.png' }],
  },
  manifest: '/manifest.json',
  themeColor: '#06092B',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="pt-BR">
    <body>
      <StyledComponentsRegistry>
        <Providers>{children}</Providers>
      </StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;

import Head from 'next/head';
import { ReactNode } from 'react';
import { MoralisProvider } from 'react-moralis';

import Header from './header';

interface Props {
  title: string;
  children: ReactNode;
}

export default function LayoutMarket({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="bg-zinc-300 h-screen">
        <MoralisProvider
          appId={process.env.NEXT_PUBLIC_APPID ?? 'App id undefined fallback'}
          serverUrl={
            process.env.NEXT_PUBLIC_SERVERURL ?? 'Server url undefined fallback'
          }
          initializeOnMount
        >
          <Header />
          {children}
        </MoralisProvider>
      </div>
    </>
  );
}

import Head from 'next/head';
import React, { ReactNode } from 'react';

import Header from './header';

interface Props {
  title?: string;
  children?: ReactNode;
}

const Layout = ({ title = 'Titulo por defecto', children }: Props) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Página de MetaCoffeeCoin un juego enfocado al área de las criptomonedas"
        />
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;

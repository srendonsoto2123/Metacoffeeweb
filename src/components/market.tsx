import React, { ReactNode } from 'react';
import Head from 'next/head';

import { useMoralis } from 'react-moralis';

import Autenticado from './autenticado';
import SinAutenticar from './sinAutenticar';

interface Props {

};

const Market = ({}: Props) => {
   const { isAuthenticated } = useMoralis();

   return (
      <>
         <Head>
            <title>Metacoffee-MarketPlace</title>
         </Head>
         <div className="m-auto w-1/5 flex flex-col h-screen justify-around">
            <h1 className="text-center">Soy un marketplace</h1>
            { isAuthenticated ? <Autenticado /> : <SinAutenticar /> } 
         </div>
      </>
   );
};

export default Market;

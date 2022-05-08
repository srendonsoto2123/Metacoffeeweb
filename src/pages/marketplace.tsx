import type { NextPage } from 'next';
import { MoralisProvider } from 'react-moralis';

import Layout from '../components/layout';
import Market from '../components/market';

const realizarCambios = (e) => {
   e.preventDefault();
   console.log("estoy presentando cambios");
};

const MarketPlace: NextPage = () => {
   return (
      <MoralisProvider appId={ process.env.NEXT_PUBLIC_APPID } serverUrl={ process.env.NEXT_PUBLIC_SERVERURL }>
         <Market />
      </MoralisProvider>
   );
};

export default MarketPlace;

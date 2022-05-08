import type { NextPage } from 'next';
import { MoralisProvider } from 'react-moralis';

import Layout from '../components/layout';
import Market from '../components/market';

const MarketPlace: NextPage = () => {
   return (
      <MoralisProvider 
         appId={ process.env.NEXT_PUBLIC_APPID ?? undefined }
         serverUrl={ process.env.NEXT_PUBLIC_SERVERURL ?? undefined }
         initializeOnMount={false}
      >
         <Market />
      </MoralisProvider>
   );
};

export default MarketPlace;

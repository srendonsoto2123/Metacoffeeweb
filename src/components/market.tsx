import React, { ReactNode } from 'react';

import { useMoralis } from 'react-moralis';

interface Props {

};

const Market = ({}: Props) => {
   const { isAuthenticated, authenticate } = useMoralis();

   return (
      <>
         <div>
            <h1>Soy un marketplace</h1>
            { isAuthenticated ? <h2>Estoy autenticado</h2> : <button onClick={() => authenticate({})}>Conectar</button> }
         </div>
      </>
   );
};

export default Market;

import React, { ReactNode } from 'react';

import { useMoralis } from 'react-moralis';

interface Props {

};

const Market = ({}: Props) => {
   const { isAuthenticated, authenticate, logout } = useMoralis();

   return (
      <>
         <div className="m-auto w-1/5 flex flex-col h-screen justify-around">
            <h1 className="text-center">Soy un marketplace</h1>
            { isAuthenticated ? 
               <div className="flex flex-col">
                  <h2 className="text-center">Estoy autenticado</h2>
                  <button onClick={() => logout()} className="p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"> Desconectar </button>
               </div>
               : <button onClick={() => authenticate()} className="p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Conectar</button> } </div>
      </>
   );
};

export default Market;

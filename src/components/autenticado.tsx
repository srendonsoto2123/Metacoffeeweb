import { useMoralis } from 'react-moralis';

import Perfil from './perfil';

interface Props {

};

const Autenticado = ({}: Props) => {
   const { logout, user } = useMoralis();
   return (
      <>
         <div className="flex flex-col">
            <Perfil user={user} />
            <h2 className="text-center">Estoy autenticado</h2>
            <button onClick={() => logout()} className="p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"> Desconectar </button>
         </div>
      </>
   );
};

export default Autenticado;

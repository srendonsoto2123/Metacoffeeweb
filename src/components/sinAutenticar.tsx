import { useMoralis } from 'react-moralis';

interface Props {
};

const SinAutenticar = ({}: Props) => {
   const { authenticate } = useMoralis();
   return (
      <>
         <h2>Parar conectarse presione el botón</h2>
         <button onClick={() => authenticate()} className="p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Conectar</button>
      </>
   );
};

export default SinAutenticar;

import { useMoralis, MoralisType } from 'react-moralis';

interface Props {
    user: MoralisType.User
};

const Perfil = ( { user }: Props ) => {
   return (
      <>
         <span>Username: </span><span>{user.getUsername()}</span>
      </>
   );
};

export default Perfil;

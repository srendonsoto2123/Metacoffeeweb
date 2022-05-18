import { useMoralis } from 'react-moralis';
import AppLink from '../appLink';
import Perfil from './perfil';
import Button from './button';

export default function HeaderMarket() {
  const { user, isAuthenticated, authenticate, logout } = useMoralis();

  const handleConnect = async () => await authenticate();
  const handleDisconnect = async () => await logout();

  return (
    <header className="flex justify-between items-center bg-slate-200 px-8 py-2 h-20">
      <AppLink href="/dashboard">
        <h2 className="text-2xl">Dashboard</h2>
      </AppLink>
      <div className="flex gap-4 sm:gap-8 items-center">
        <AppLink href="/dashboard/userinfo">Perfil</AppLink>
        <AppLink href="/dashboard/balance">Balance</AppLink>
        <AppLink href="/dashboard/nfts">Ntf&apos;s</AppLink>
        <AppLink href="/dashboard/transacciones">Transacciones</AppLink>
        <AppLink href="/dashboard/intercambios">Marketplace</AppLink>
        {isAuthenticated ? (
          <Perfil user={user} handleClick={handleDisconnect} />
        ) : (
          <Button handleClick={handleConnect}>Conectarse</Button>
        )}
      </div>
    </header>
  );
}

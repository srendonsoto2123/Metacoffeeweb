import MoralisType from 'moralis';
import Button from './button';

interface Props {
  user: MoralisType.User | null;
  handleClick: () => void;
}

export default function Perfil({ user, handleClick }: Props) {
  return (
    <div className="flex flex-col text-sm px-3 gap-2">
      <span>
        <strong>Username:</strong> <span>{user?.getUsername()}</span>
      </span>
      <Button handleClick={handleClick}>Desconectar</Button>
    </div>
  );
}

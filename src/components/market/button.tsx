import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  handleClick: () => void;
  disable?: boolean;
}

export default function Button({
  children,
  handleClick,
  disable = false
}: Props) {
  return (
    <button
      className="border px-5 font-bold py-2 text-xs border-slate-700 bg-slate-100 rounded-lg drop-shadow-md hover:bg-slate-300 hover:drop-shadow-none"
      onClick={handleClick}
      disabled={disable}
    >
      {children}
    </button>
  );
}

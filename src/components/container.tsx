import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div className="m-6 p-8 border-2 border-slate-400 rounded bg-slate-200 drop-shadow">
      {children}
    </div>
  );
}

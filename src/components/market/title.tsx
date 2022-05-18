import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Title({ children }: Props) {
  return <h2 className="text-center text-2xl mb-8">{children}</h2>;
}

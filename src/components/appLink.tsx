import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

interface Props extends LinkProps {
  children: ReactNode;
  href: string;
}

export default function AppLink({ children, href }: Props) {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
}

interface Props {
  hash: string | undefined;
  url: string | undefined;
}

export default function Transaccion({ hash, url }: Props) {
  return (
    <a href={`${url}${hash}`}>
      <strong>{hash}</strong>
    </a>
  );
}

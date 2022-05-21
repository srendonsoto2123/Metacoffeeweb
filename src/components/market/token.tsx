interface Props {
  tokenName: string | undefined;
  abbr: string | undefined;
  amount: string | undefined;
}

export default function Token({ tokenName, abbr, amount }: Props) {
  return (
    <div className="">
      {amount}{' '}
      <strong>
        <em>{abbr || tokenName}</em>
      </strong>
    </div>
  );
}

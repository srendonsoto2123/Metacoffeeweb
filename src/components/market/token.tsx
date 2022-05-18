interface Props {
      tokenName: string;
      abbr?: string;
      amount: string;
   }

export default function Token({ tokenName, abbr, amount }: Props) {
   return (
      <div className="">
         {amount} <strong><em>{abbr || tokenName}</em></strong>
      </div>
   );
}

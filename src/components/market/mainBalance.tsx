import Moralis from 'moralis/types';
import { useEffect, useState } from 'react';
import { useMoralis, useNativeBalance } from 'react-moralis';
import Container from '../container';
import Title from './title';
import Token from './token';

export default function MainBalance() {
  const {
    getBalances,
    data: balance,
    nativeToken
  } = useNativeBalance({ chain: 'rinkeby' });
  const { user } = useMoralis();
  const value = user?.get('ethAddress');

  const [balanceETH, setBalanceETH] = useState<string | undefined>('');

  const getUserBalances = async () => {
    const results = await getBalances();
    setBalanceETH(results?.balance);
  };

  useEffect(() => {
    getUserBalances();
  }, []);

  return (
    <Container>
      <Title>Balance</Title>
      <div>
        <Token
          tokenName={nativeToken?.name}
          abbr={'ETH'}
          amount={(balance.balance as unknown as number) / 10 ** 18}
        />
      </div>
    </Container>
  );
}

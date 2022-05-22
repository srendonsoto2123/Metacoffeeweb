import { useEffect, useState } from 'react';
import { useNativeBalance } from 'react-moralis';
import Container from '../container';
import Title from './title';
import Token from './token';

export default function MainBalance() {

  const {
    getBalances,
    nativeToken
  } = useNativeBalance({ chain: 'rinkeby' });

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
          amount={(balanceETH as unknown as number / 10 ** 18).toString()}
        />
      </div>
    </Container>
  );
}


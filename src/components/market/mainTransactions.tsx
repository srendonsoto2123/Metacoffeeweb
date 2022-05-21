import { useEffect, useState } from 'react';
import { useMoralis, useMoralisWeb3Api } from 'react-moralis';
import Container from '../container';
import Title from './title';
import Transaccion from './transaccion';

export default function MainTransacciones() {
  const [transacciones, setTransacciones] = useState<any>();

  const { user } = useMoralis();
  const BASE_URL = 'https://rinkeby.etherscan.io/tx/';

  const Web3Api = useMoralisWeb3Api();

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const data = await Web3Api.account.getTransactions({
      chain: 'rinkeby',
      address: user?.get('ethAddress')
    });
    if (data) {
      setTransacciones(data.result);
    }
  };

  return (
    <Container>
      <Title> Transacciones </Title>
      {transacciones &&
        transacciones.map((transac: any) => {
          return (
            <Transaccion
              hash={transac.hash}
              key={transac.hash}
              url={BASE_URL}
            />
          );
        })}
    </Container>
  );
}

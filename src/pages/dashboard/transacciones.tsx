import { NextPage } from 'next';
import Layout from '../../components/market/layout';
import MainTransacciones from '../../components/market/mainTransactions';

const Transacciones: NextPage = () => {
  return (
    <Layout title="Transacciones">
      <MainTransacciones />
    </Layout>
  );
};

export default Transacciones;

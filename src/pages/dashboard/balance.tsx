import type { NextPage } from 'next';
import Layout from '../../components/market/layout';
import MainBalance from '../../components/market/mainBalance';

const Balance: NextPage = () => {
  return (
    <Layout title="Balance">
      <MainBalance />
    </Layout>
  );
};

export default Balance;

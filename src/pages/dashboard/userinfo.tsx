import type { NextPage } from 'next';
import Layout from '../../components/market/layout';
import MainUserInfo from '../../components/market/mainUserInfo';

const Userinfo: NextPage = () => {
  return (
    <Layout title="Userinfo">
      <MainUserInfo />
    </Layout>
  );
};

export default Userinfo;

import Container from '../container';
import Title from './title';
import Token from './token';

export default function MainBalance() {
  return (
    <Container>
      <Title>Balance</Title>
      <div>
         <Token tokenName="Etherium" abbr="ETH" amount="0,000"/>
      </div>
    </Container>
  );
}

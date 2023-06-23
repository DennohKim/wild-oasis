import GlobalStyles from './styles/GlobalStyles';
import { StyledApp } from './StyledApp';
import Heading from './ui/Heading';
import Row from './ui/Row';
import Input from './ui/Input';
import Button from './ui/Button';

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type='horizontal'>
            <Heading as='h1'>Hello World</Heading>
            <Button
              variation='danger'
              size='medium'
              onClick={() => alert('Chizaa')}
            >
              Chizaa
            </Button>
            <Button
              variation='secondary'
              size='small'
              onClick={() => alert('Chizaa')}
            >
              Chizaa
            </Button>
          </Row>
          <Row>
            <Heading as='h3'>Form</Heading>
            <form action=''>
              <Input type='number' />
              <Input type='type' />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;

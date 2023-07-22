import { Box, Container } from '@chakra-ui/react';
import Header from './components/Header';
import Background from './components/Background';
import MainContent from './components/MainContentItems/MainContent';
function App() {
  return (
    <>
      <Container pos="relative" backgroundColor="veryPaleBlue" h="120vh" overflowX={{ sm: 'hidden', lg: 'visible' }}>
        <Box h="50vh" textAlign="center" pos="relative" zIndex="2" w={{ lg: '40rem' }}>
          <Header />
        </Box>
        <MainContent />
        <Background />
      </Container>

      <div className="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Zachary</a>.
      </div>
    </>
  );
}

export default App;

import { Box, Container } from '@chakra-ui/react';
import Header from './components/Header';
import Background from './components/Background';
import MainContent from './components/MainContent';
function App() {
  return (
    <Container pos="relative" backgroundColor="veryPaleBlue" h="100vh">
      <MainContent pos="relative"  />
      <Box h="50vh" pos="relative" zIndex="1">
        <Background />
        <Header />
      </Box>
    </Container>
  );
}

export default App;

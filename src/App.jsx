import { Box, Container } from '@chakra-ui/react';
import Header from './components/Header';
import Background from './components/Background';
function App() {
  return (
    <Container pos="relative">
      <Box h="50vh">
        <Background />
        <Header />
      </Box>
    </Container>
  );
}

export default App;

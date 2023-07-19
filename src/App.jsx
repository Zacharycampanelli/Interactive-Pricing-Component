import { Box, Container } from '@chakra-ui/react';
import Header from './components/Header';
import Background from './components/Background';
import MainContent from './components/MainContent';
function App() {
  return (
  <>
    <Container pos="relative" backgroundColor="veryPaleBlue" h="120vh" overflowX={{sm: "hidden", lg:"visible"}} >
      <Box h="50vh" pos="relative" zIndex="2" >
        <Header />
      </Box>
      <MainContent />
        <Background />
    </Container>
  </>
  );
}

export default App;

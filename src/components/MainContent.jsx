import { Flex,  Container,  Center } from '@chakra-ui/react';
import PriceSlider from './PriceSlider';
import { useState } from 'react';
import SwitchContainer from './SwitchContainer';

const MainContent = () => {
  const [value, setValue] = useState(16);
  return (
    <Container
      backgroundColor="white"
      w="85vw"
      minH="65%"
      boxShadow="lg"
      pos="absolute"
      top="40%"
      left="0"
      right="0"
      zIndex="2"
      p="6"
      textAlign="center"
    >
      <h3>100K PAGEVIEWS</h3>
      <PriceSlider value={value} setValue={setValue} />
      <Center>
        <Flex alignItems="center" w="30%" justifyContent="space-around">
          <h1>${value}.00</h1>
          <h4>/month</h4>
        </Flex>
      </Center>
      <SwitchContainer />
      
    </Container>
  );
};

export default MainContent;

import { Flex,  Container,  Center, Button } from '@chakra-ui/react';
import PriceSlider from './MainContentItems/PriceSlider';
import { useState } from 'react';
import SwitchContainer from './MainContentItems/SwitchContainer';
import CheckList from './MainContentItems/CheckList';

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
      <CheckList />
      <Button fontSize="12px" fontWeight="800" borderRadius="28.5px" color="paleBlue" backgroundColor="darkDesaturatedBlue" px="35px" py="20px">Start my trial</Button>    
      </Container>
  );
};

export default MainContent;

import { Flex, Container, Box } from '@chakra-ui/react';
import { useState } from 'react';
import BoxFooter from '../BoxFooterItems/BoxFooter';
import Pricing from '../Pricing/Pricing';

const MainContent = () => {
  const [value, setValue] = useState(16);
  const [viewers, setViewers] = useState('100K');
  const [frequency, setFrequency] = useState('monthly');

  return (
    <Container
      backgroundColor="white"
      w="85vw"
      h={{ sm: '62vh', lg: '52vh' }}
      boxShadow="lg"
      pos="absolute"
      top="15rem"
      left="0"
      right="0"
      zIndex="2"
      p={{ sm: '6', lg: '10' }}
      pt="8"
      textAlign="center"
    >
      {' '}
      <Flex flexDirection="column" h="100%" w="100%" justifyContent="space-evenly" alignItems="center">
        <Pricing
          value={value}
          setValue={setValue}
          viewers={viewers}
          setViewers={setViewers}
          frequency={frequency}
          setFrequency={setFrequency}
        />
        <Box backgroundColor="veryPaleBlue" h="3px" w="115%"  />
        <BoxFooter />
      </Flex>
    </Container>
  );
};

export default MainContent;

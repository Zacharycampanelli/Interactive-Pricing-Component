import { Flex,  Container,  Center, Button } from '@chakra-ui/react';
import PriceSlider from './MainContentItems/PriceSlider';
import { useState } from 'react';
import SwitchContainer from './MainContentItems/SwitchContainer';
import CheckList from './MainContentItems/CheckList';

const MainContent = () => {
  const [value, setValue] = useState(16);
  const [viewers, setViewers] = useState("100K");
  const [frequency, setFrequency] = useState('monthly');
  
  const annualConvert = (num) => {
    if (frequency === 'yearly'){
      let newnum = num * 12;
      newnum *= .75;
      return newnum
    }
    return num;
  
  }

  return (
    <Container
      backgroundColor="white"
      w={{sm: "85vw", lg: "100vw"}}
      h="65vh"
      boxShadow="lg"
      pos="absolute"
      top="17rem"
      left="0"
      right="0"
      zIndex="2"
      p="6"
      pt="8"
      textAlign="center"
    > <Flex flexDirection="column" height="100%" justifyContent="space-around" alignItems="center">

      <h3>{viewers} PAGEVIEWS</h3>
      <PriceSlider value={value} setValue={setValue} viewers={viewers} setViewers={setViewers} />
      <Center mt="-15px">
        <Flex alignItems="center" w="30%" justifyContent="space-around">
          <h1>${annualConvert(value)}.00</h1>
          <h4>/month</h4>
        </Flex>
      </Center>
      <SwitchContainer frequency={frequency} setFrequency={setFrequency} />
      <CheckList />
      <Button fontSize="12px" fontWeight="800" borderRadius="28.5px" color="paleBlue" backgroundColor="darkDesaturatedBlue" px="35px" py="20px" w="50%" ml="0" mr="0" >Start my trial</Button>    
    </Flex>
      </Container>
  );
};

export default MainContent;

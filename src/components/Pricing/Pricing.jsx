import { Flex, Center, Text, HStack } from '@chakra-ui/react';

import PriceSlider from '../MainContentItems/PriceSlider';
import SwitchContainer from '../MainContentItems/SwitchContainer';
import MediaQuery from 'react-responsive';

const Pricing = ({ value, setValue, viewers, setViewers, frequency, setFrequency }) => {
  const annualConvert = (num) => {
    if (frequency === 'yearly') {
      let newnum = num * 12;
      newnum *= 0.75;
      return newnum;
    }
    return num;
  };

  return (
    <>
      <Center mt="-25px" w={{ lg: '100rem' }}>
        <Flex alignItems="center" w="43%" justifyContent="space-around">
          <Text fontSize={{sm: 'xs', lg: 'md'}} fontWeight="800" letterSpacing="1.7px" color="grayishBlue" w={{sm: '80vw', lg: '13vw'}} mt={{sm: '1rem', lg: '0.5rem'}}>{viewers} PAGEVIEWS</Text>
          <MediaQuery minWidth={'1440px'}>
            <HStack >
            <Text fontSize={{sm: '3xl', lg: '4xl'}} fontWeight="800" color="darkDesaturatedBlue">${annualConvert(value)}.00</Text>
            <Text fontSize={{sm: 'sm', lg: 'lg'}} fontWeight="600" color="grayishBlue">/month</Text>
            </HStack>
          </MediaQuery>
        </Flex>
      </Center>
      <PriceSlider value={value} setValue={setValue} viewers={viewers} setViewers={setViewers} />
      <MediaQuery maxWidth={'1440px'}>
        <HStack mt="-25px" mb="-20px">
            <Text fontSize={{sm: '3xl', lg: '4xl'}} fontWeight="800" color="darkDesaturatedBlue" mr={{lg: "-10rem"}} display="inline">${annualConvert(value)}.00</Text>
            <Text fontSize={{sm: 'sm', lg: 'lg'}} fontWeight="600" color="grayishBlue" display="inline">/month</Text>
        </HStack>
      </MediaQuery>
      <SwitchContainer frequency={frequency} setFrequency={setFrequency} />
    </>
  );
};

export default Pricing;

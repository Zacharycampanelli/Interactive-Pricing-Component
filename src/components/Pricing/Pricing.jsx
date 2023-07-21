import { Flex, Center, Text } from '@chakra-ui/react';

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
      {/* <h3>{viewers} PAGEVIEWS</h3> */}
      <Center mt="-15px" w={{ lg: '100rem' }}>
        <Flex alignItems="center" w="43%" justifyContent="space-around">
          <Text fontSize={{sm: 'xs', lg: 'md'}} fontWeight="800" letterSpacing="1.7px" color="grayishBlue">{viewers} PAGEVIEWS</Text>
          <MediaQuery minWidth={'1440px'}>
            <Text fontSize={{sm: '3xl', lg: '4xl'}} fontWeight="800" color="darkDesaturatedBlue" mr={{lg: "-10rem"}}>${annualConvert(value)}.00</Text>
            <Text fontSize={{sm: 'sm', lg: 'lg'}} fontWeight="600" color="grayishBlue">/month</Text>
          </MediaQuery>
        </Flex>
      </Center>
      <PriceSlider value={value} setValue={setValue} viewers={viewers} setViewers={setViewers} />
      <MediaQuery maxWidth={'1440px'}>
      <Text fontSize={{sm: '3xl', lg: '4xl'}} fontWeight="800" color="darkDesaturatedBlue" mr={{lg: "-10rem"}}>${annualConvert(value)}.00</Text>
            <Text fontSize={{sm: 'sm', lg: 'lg'}} fontWeight="600" color="grayishBlue">/month</Text>
      </MediaQuery>
      <SwitchContainer frequency={frequency} setFrequency={setFrequency} />
    </>
  );
};

export default Pricing;

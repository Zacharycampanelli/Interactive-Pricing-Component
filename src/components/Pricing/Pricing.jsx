import { Flex, Center } from '@chakra-ui/react';

import PriceSlider from '../MainContentItems/PriceSlider';
import SwitchContainer from '../MainContentItems/SwitchContainer';
import MediaQuery from 'react-responsive';

const Pricing = ({value, setValue, viewers, setViewers, frequency, setFrequency}) => {

  
    const annualConvert = (num) => {
        if (frequency === 'yearly'){
          let newnum = num * 12;
          newnum *= .75;
          return newnum
        }
        return num;
      
      }


  return (
   <>

    <MediaQuery maxWidth={"1440px"}>
    <h3>{viewers} PAGEVIEWS</h3>
    <PriceSlider value={value} setValue={setValue} viewers={viewers} setViewers={setViewers} />
       </MediaQuery>
    <Center mt="-15px" w={{lg: "100rem"}}>
      <Flex alignItems="center" w="43%" justifyContent="space-around">
        <MediaQuery minWidth={"1440px"}>
        <h3>{viewers} PAGEVIEWS</h3>
        </MediaQuery>

        <h1>${annualConvert(value)}.00</h1>
        <h4>/month</h4>
   
      </Flex>
    </Center>
      <MediaQuery minWidth={"1440px"}>
    <PriceSlider value={value} setValue={setValue} viewers={viewers} setViewers={setViewers} />
       </MediaQuery>
    <SwitchContainer frequency={frequency} setFrequency={setFrequency} />   
    </>
  )
}

export default Pricing

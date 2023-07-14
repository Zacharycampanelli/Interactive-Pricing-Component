import {  Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark, Box } from '@chakra-ui/react';

import SliderIcon from '../../assets/images/icon-slider.svg';
import { useState } from 'react';

const pricingMonthly = [
  {
    price: 8,
    views: '10K'
  },
  {
    price: 12,
    views: '50K'
  },
  {
    price: 16,
    views: '100K'
  },
  {
    price: 24,
    views: '500K'
  },
  {
    price: 36,
    views: '1M'
  },
]


const PriceSlider = ({value, setValue}) => {
  // const [value, setValue] = useState(16)


  const handleChange = (e) => {
    if (e === 20 || e === 28 || e === 32) {
      e = value;
    }

    setValue(e);
    console.log(value)
  }



  return (
    <div>
      <Slider aria-label="slider-ex-1" min={8} max={36} onChange={handleChange} step={4}> 
        {/* <SliderMark value={pricingMonthly[0].price} />
        <SliderMark value={pricingMonthly[1].price} />
        <SliderMark value={pricingMonthly[2].price} />
        <SliderMark value={pricingMonthly[3].price} />
        <SliderMark value={pricingMonthly[4].price} /> */}

        <SliderTrack bg="lightGrayishBlue">
        {/* <Box position='relative' right={10} /> */}
          <SliderFilledTrack bg="strongCyan" />
        </SliderTrack >
        <SliderThumb boxSize={10} bg="strongCyan">
          <Box  as={SliderIcon} >
            <SliderIcon/>
          </Box>
        </SliderThumb>
      </Slider>
      
    </div>
  );
};

export default PriceSlider;

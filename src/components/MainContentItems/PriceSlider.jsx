import {  Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark, Box } from '@chakra-ui/react';

import SliderIcon from '../../assets/images/icon-slider.svg';


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


const PriceSlider = ({value, setValue, viewers, setViewers}) => {
  // const [value, setValue] = useState(16)


  const handleChange = (e) => {
    if (e === 20 || e === 28 || e === 32) {
      console.log(e, value)
      e = value;
    }

    setValue(e);
    console.log(value)
    changeViewers(e)
    
}

const changeViewers = price => {
  let views = "";
   pricingMonthly.forEach(rate => {
        if(rate.price === price) {
          console.log(rate.views)
          views = rate.views;
        }
      });

      setViewers(views)
    }


  return (

      <Slider aria-label="slider-ex-1" min={8} max={36} onChange={handleChange} step={4} mt={{sm:"-10px", lg: "-10px"}}> 
        <SliderTrack bg="lightGrayishBlue" h="8px">
          <SliderFilledTrack bg="strongCyan" />
        </SliderTrack >
        <SliderThumb boxSize={10} bg="strongCyan"  _hover={{ boxShadow: "0 10px 30px 0 cyan", bg: "cyan"}}>
          <Box  as={SliderIcon} >
            <SliderIcon/>
          </Box>
        </SliderThumb>
      </Slider>

  );
};

export default PriceSlider;

import { Box, Center, Flex, FormLabel, Switch } from '@chakra-ui/react';
import MediaQuery from 'react-responsive';
const SwitchContainer = ({frequency, setFrequency}) => {

  const handleFrequency = () => {
    if(frequency === 'monthly') {
      setFrequency('yearly')
    }
    else {
      setFrequency('monthly')
    }
  }

  return (
    <Center  ml="12px" mt="10px" >
      <Flex width="100%" justifyContent="space-around">
        <FormLabel htmlFor="monthly">
          <p>Monthly Billing</p>
        </FormLabel>
        <Switch onChange={handleFrequency} px="3px"/>
        <FormLabel htmlFor="yearly">
          <p>Yearly Billing</p>
        </FormLabel>
      </Flex>
      <Box
        borderRadius="9.5px"
        position={{lg: "absolute"}}
        right={{lg: "110"}}
        color="lightRed"
        background="lightGrayishRed"
        px="8px"
        py="2px"
        mb="6px"
        mr="-10px"
        fontSize="10px"
        fontWeight="800"
        w={{lg: "15%"}}
      >
        -25%
        <MediaQuery minWidth="1440px">
          {' '} discount
        </MediaQuery>
      </Box>
    </Center>
  );
};

export default SwitchContainer;

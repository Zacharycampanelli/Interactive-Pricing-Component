import { Box, Center, Flex, FormLabel, HStack, Switch, Text } from '@chakra-ui/react';
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
      <HStack align="center" justify="center">

          <Text fontSize="12px" fontWeight="600" color="grayishBlue">Monthly Billing</Text>

        <Switch onChange={handleFrequency} px="3px" _hover={{color: 'cyan'}} />

          <Text fontSize="12px" fontWeight="600" color="grayishBlue">Yearly Billing</Text>

      
      <Box
        borderRadius="9.5px"
        position={{lg: "absolute"}}
        right={{lg: "110"}}
        color="lightRed"
        background="lightGrayishRed"
        px="8px"
        py="2px"
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
      </HStack>
    </Center>
  );
};

export default SwitchContainer;

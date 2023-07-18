import { Box, Center, Flex, FormLabel, Switch } from '@chakra-ui/react';

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
    <Center  ml="12px">
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
        color="lightRed"
        background="lightGrayishRed"
        px="8px"
        py="2px"
        mb="6px"
        mr="-10px"
        fontSize="10px"
        fontWeight="800"
      >
        -25%
      </Box>
    </Center>
  );
};

export default SwitchContainer;

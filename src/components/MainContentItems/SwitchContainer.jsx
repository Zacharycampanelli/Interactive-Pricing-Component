import { Box, Center, Flex, FormLabel, Switch } from '@chakra-ui/react';

const SwitchContainer = () => {
  return (
    <Center>
      <Flex width="80%" justifyContent="space-around">
        <FormLabel htmlFor="monthly">
          <p>Monthly Billing</p>
        </FormLabel>
        <Switch onChange="" />
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
        fontSize="10px"
        fontWeight="800"
      >
        -25%
      </Box>
    </Center>
  );
};

export default SwitchContainer;

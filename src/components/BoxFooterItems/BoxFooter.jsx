import { Flex, Button } from '@chakra-ui/react';
import CheckList from './CheckList';

const BoxFooter = () => {
  return (
    <Flex
      direction={{ sm: 'column', lg: 'row' }}
      justifyItems="center"
      justifyContent="space-between"
      w="100%"
      h={{ sm: '18vh', lg: '8vh' }}
      alignItems="center"
    >
      <CheckList />
      <Button
        fontSize="12px"
        fontWeight="800"
        borderRadius="28.5px"
        color="paleBlue"
        backgroundColor="darkDesaturatedBlue"
        px="35px"
        py="20px"
        w={{ sm: '60%', lg: '35%' }}
        ml="0"
        mr="0"
        mt={{ sm: '20px', lg: '35px' }}
        _hover={{ color: 'white' }}
      >
        Start my trial
      </Button>
    </Flex>
  );
};

export default BoxFooter;

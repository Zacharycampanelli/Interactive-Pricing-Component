import { Box, Flex, Text } from '@chakra-ui/react';
import Circles from '../assets/images/pattern-circles.svg';

const Header = () => {
  return (
    <Flex pos="relative" flexDirection="column" alignItems="center" justifyContent="center" h="21rem" w="">
      <Box pos="absolute">
        <Circles />
      </Box>
      <Text fontSize={{sm: 'xl', lg: '2xl'}} fontWeight="800" color="darkDesaturatedBlue">Simple, traffic-based pricing</Text>
      <Box w={{sm: "50%", lg: "60%"}} mt="10px" textAlign="center" lineHeight="1.75">
        <Text fontSize={{sm: 'sm', lg: 'lg'}} fontWeight="600" color="grayishBlue">Sign-up for our 30-day trial. No credit card required. </Text>
      </Box>
    </Flex>
  );
};

export default Header;

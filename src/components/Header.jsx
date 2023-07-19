import { Box, Flex } from '@chakra-ui/react';
import Circles from '../assets/images/pattern-circles.svg';

const Header = () => {
  return (
    <Flex pos="relative" flexDirection="column" alignItems="center" justifyContent="center" h="21rem">
      <Box pos="absolute">
        <Circles />
      </Box>
      <h2>Simple, traffic-based pricing</h2>
      <Box w="50%" mt="10px" textAlign="center" lineHeight="1.75">
        <h4>Sign-up for our 30-day trial. No credit card required. </h4>
      </Box>
    </Flex>
  );
};

export default Header;

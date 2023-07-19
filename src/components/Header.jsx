import { Box, Flex } from '@chakra-ui/react';
import Circles from '../assets/images/pattern-circles.svg';

const Header = () => {
  return (
    <Flex pos="relative" flexDirection="column" alignItems="center" justifyContent="center" h="21rem" w="">
      <Box pos="absolute">
        <Circles />
      </Box>
      <h2>Simple, traffic-based pricing</h2>
      <Box w={{sm: "50%", lg: "60%"}} mt="10px" textAlign="center" lineHeight="1.75">
        <h4>Sign-up for our 30-day trial. No credit card required. </h4>
      </Box>
    </Flex>
  );
};

export default Header;

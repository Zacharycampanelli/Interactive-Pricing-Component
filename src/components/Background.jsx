import { Box, Center } from '@chakra-ui/react'
import BackgroundColor from '../assets/images/bg-pattern.svg';
import Circles from '../assets/images/pattern-circles.svg';

const Background = () => {
  return (
    <Box position="absolute" top={0} w="100vw" ml="-20px" h="inherit" zIndex={-1}>
      <BackgroundColor pos="absolute" right="0" top="0" h="50vh" />
      <Center pos="absolute" top="6rem" left="0" right="0" >
        <Circles />
      </Center>
    </Box>
  )
}

export default Background

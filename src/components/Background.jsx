import { Box, Center, Image } from '@chakra-ui/react'
import background from '../assets/images/bg-pattern.svg';
import circles from '../assets/images/pattern-circles.svg';

const Background = () => {
  return (
    <Box position="absolute" top={0} w="100vw" ml="-20px" h="inherit" zIndex={-1}>
      <Image src={background} pos="absolute" right="0" top="0" h="50vh" />
      <Center pos="absolute" top="25%" left="0" right="0" >
        <Image src={circles} />
      </Center>
    </Box>
  )
}

export default Background

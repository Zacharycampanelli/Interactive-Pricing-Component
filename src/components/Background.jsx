import { Box, Center } from '@chakra-ui/react'
import BackgroundColor from '../assets/images/bg-pattern.svg';

const Background = () => {
  return (
  
    <Box position="absolute" top="0" w="100%" ml={{sm: "-20px", lg: "-65%"}} left={{lg: "0"}} right={{lg: "0"}}  h="inherit" zIndex={1}>
      <BackgroundColor pos="absolute" right="0" top="0"  h="50vh" />
      {/* <Center pos="absolute" top="6rem" left="0" right="0" >
      </Center> */}
    </Box>

  )
}

export default Background

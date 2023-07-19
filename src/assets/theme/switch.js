import { switchAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys)

const baseStyle = definePartsStyle({
  track: {
    bg: 'lightGrayishBlue2',
    _hover: {
      bg: 'cyan',
    },
  },
})

export const switchTheme = defineMultiStyleConfig({ baseStyle })
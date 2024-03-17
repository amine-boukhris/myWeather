import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading : `'Inter', sans-serif`,
    body : `'Inter', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bgGradient: 'radial(cyan.50, white)', // Set your desired background color
      },
    },
  },
})

export default theme
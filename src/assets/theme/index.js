import { extendTheme } from "@chakra-ui/react";
import { switchTheme } from "./switch";
const theme = extendTheme({
    components: { Switch: switchTheme },
    fontSizes: {
        xs: '12px',
        sm: '13px',
        md: '14px',
        lg: '15px',
        xl: '20px',
        '2xl' : '28px',
        '3xl' : '32px',
        '4xl' : '40px',
    },
    colors: {
        softCyan: '#A4F3EB',
        strongCyan: '#10D5C2',
        cyan: '#7AEADF',
        lightGrayishRed: '#FEEDE8',
        lightRed: '#FF8D68',
        paleBlue: '#BECDFF',
        white: '#FFFFFF',
        veryPaleBlue: '#FAFBFF',
        lightGrayishBlue: '#ECEFFB',
        lightGrayishBlue2: '#CFD8EF',
        grayishBlue: '#848EAD',
        darkDesaturatedBlue: '#293356' ,


    },
    breakpoints: {
        sm: '375px',
        lg: '1440px'
    },
    fonts: {
        body: 'Manrope, sans-serif'
    },
    styles: {
        global: {
            body: {
                bg: {
                    sm: 'white',
                    lg: 'veryPaleBlue'
                }
            }
        }

    }
})

export default theme;
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
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
            h1: {
                color: 'darkDesaturatedBlue',
                fontWeight: 800,
                fontSize: {
                    sm: '32px',
                    lg: '40px'
                },
                marginRight: {
                    lg: "-10rem"
                }
            },
            h2: {
                color: 'darkDesaturatedBlue',
                fontWeight: 800,
                fontSize: {
                    sm: '20px',
                    lg: '28px'
                }
            },
            h3: {
                color: 'grayishBlue',
                fontWeight: 800,
                letterSpacing: '1.7px',
                fontSize: {
                    sm: '12px',
                    lg: '14px'
                }
            },
            h4: {
                color: 'grayishBlue',
                fontWeight: 600,
                fontSize: {
                    sm: '13px',
                    lg: '15px'
            },
            display: 'inline'
        },
            p: { 
                color: 'grayishBlue',
                fontWeight: 600,
                fontSize: '12px'
            },

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
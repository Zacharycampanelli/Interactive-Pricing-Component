import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        softCyan: '#A4F3EB',
        strongCyan: '#ECF0FB',
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
            }
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
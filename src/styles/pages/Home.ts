import { styled } from "../stitches.config";

export const Container = styled('div', {
    maxWidth: '80rem',
    margin: 'auto',
    height: '100vh',

    '@sm': {
        margin: '0 1rem',
    },

    'div': {
        display: 'grid',
        gridTemplateAreas: `
            'Header Header'
            'Main Main'
            'Footer Footer'
        `,
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: 'auto 1fr auto',
        height: '100%',
        

        'main': {
            gridArea: 'Main',
            display: 'flex',
            flexDirection: 'column',
            
            'div': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',

                'h1': {
                    fontSize: '2.6rem',
                    marginBottom: '1.2rem',
                },
                '> span': {
                    fontSize: '1.125rem',
                    color: '$secondary',
                }
            },
            
            'div:last-child': {
                '> span': {
                    transform: 'translateY(30%)'
                }
            }
        }
    }
})


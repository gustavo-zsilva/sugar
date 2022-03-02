import { styled } from "../stitches.config";

export const Container = styled('div', {
    height: '100vh',

    '@mobile': {
        mx: '$1',
    },
    '@tablet': {
        mx: '$2',
    },

    '> div': {
        maxWidth: '80rem',
        margin: 'auto',

        display: 'grid',
        gridTemplateAreas: `
            'Header Header'
            'Main Main'
            'Footer Footer'
        `,
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: 'auto 1fr auto',
        height: '100%',

        '@desktop': {
            gridTemplateAreas: `
                'Header Header'
                'Main Hero'
                'Footer Footer'
            `,
        },

        'main': {
            gridArea: 'Main',
            display: 'flex',
            flexDirection: 'column',
            
            '@desktop': {
                justifyContent: 'space-between',
                my: '12rem',
            },
            
            'div:first-child': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                flex: 1,

                '@desktop': {
                    textAlign: 'left',
                    flex: 0,
                },

                'h1': {
                    fontSize: '2.6rem',
                    marginBottom: '1.2rem',
                    
                    'span': {
                        backgroundImage: 'url(/line.svg)',
                        backgroundPosition: 'bottom',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                    },

                    '@desktop': {
                        fontSize: '3.2rem',
                        maxWidth: '22rem',
                    }
                },
                '> span': {
                    fontSize: '1.125rem',
                    color: '$secondary',
                }
            },
        },
    }
})

export const ButtonGroup = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    my: '$2',

    '@tablet': {
        flexDirection: 'row',
        '> span': {
            visibility: 'hidden',
        }
    },

    'button': {
        width: '100%'
    },

    '> span': {
        transform: 'translateY(30%)',
        color: '$secondary',
    }
})


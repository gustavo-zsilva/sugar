import { styled } from "@styles/stitches.config";

export const Button = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    background: '$lightBlack',
    color: '$white',
    fontWeight: '$semiBold',
    borderRadius: '$full',
    
    padding: '1rem',
    gridGap: '.4rem',
    
    transition: '.2s',
    boxShadow: '0 0 3px 3px rgba(0, 0, 0, 0.03)',

    variants: {
        type: {
            ghost: {
                color: '$black',
                background: 'transparent',
                borderRadius: 'initial',
                borderBottom: '3px solid',
                boxShadow: '0 0 0 transparent',
                transition: '.2s',

                '&:hover': {
                    background: 'linear-gradient(transparent 80%, $primary)',
                }
            },
            primary: {
                background: '$primary',
                '&:hover': {
                    background: '$primaryDark',
                },
            }
        },
        size: {
            sm: {
                fontSize: '1rem',
                padding: '.6rem 1.2rem',
            },
        }
    },
})
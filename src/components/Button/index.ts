import { styled } from "@styles/stitches.config";

export const Button = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    background: '$lightBlack',
    color: '$white',
    fontWeight: '$semiBold',
    
    padding: '1rem',
    borderRadius: '999px',
    border: 0,
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
            },
            purple: {
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
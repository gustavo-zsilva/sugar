import { styled } from '@styles/stitches.config'

export const Container = styled('header', {
    gridArea: 'Header',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 0',

    'strong': {
        color: '$lightBlack',
        fontSize: '1.2rem',
        display: 'flex',
        gridGap: '.2rem',
        alignItems: 'center',
    },

    'button': {
        background: '$lightBlack',
        padding: '.6rem 1.2rem',
        borderRadius: '999px',
        border: 0,
        display: 'flex',
        alignItems: 'center',
        gridGap: '.4rem',
        color: '$white',
        fontWeight: '$semiBold',
    },
})
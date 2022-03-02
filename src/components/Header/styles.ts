import { styled } from '@styles/stitches.config'

export const Container = styled('header', {
    gridArea: 'Header',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 0',

    '> div': {
        display: 'flex',
        gridGap: '$1',
        
        '> strong': {
            color: '$lightBlack',
            fontSize: '1.2rem',
            display: 'flex',
            gridGap: '.2rem',
            alignItems: 'center',
            textShadow: '2px 2px #EEF5DB',
        },
    },
})

export const VisitCounter = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gridGap: '6px',

    padding: '.2rem 1rem',
    borderRadius: '$full',
    background: '$green',
    opacity: '.9',

    boxShadow: '0 0 3px 3px rgba(0, 0, 0, 0.03)',

    '@mobile': {
        display: 'none',
    },

    '@tablet': {
        display: 'flex',
    }
})
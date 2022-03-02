import { MdIcecream } from 'react-icons/md'
import { BsCupStraw } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'

import { Button } from '@components/Button'
import { Container, VisitCounter } from './styles'

export function Header() {
    return (
        <Container>
            <div>
                <strong>
                    <MdIcecream size={25} />
                    Sugar
                </strong>
                <VisitCounter>
                    <strong>200</strong>
                    <span>visits today</span>
                    <AiFillHeart size={22} color="#8468F5" />
                </VisitCounter>
            </div>
            <Button aria-label="Sugar Up" size="sm">
                <span>Sugar Up</span>
                <BsCupStraw color="#FFF" size={22} />
            </Button>
        </Container>
    )
}
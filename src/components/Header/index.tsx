import { MdIcecream } from 'react-icons/md'
import { BsCupStraw } from 'react-icons/bs'

import { Container } from './styles'
import { Button } from '@components/Button'

export function Header() {
    return (
        <Container>
            <strong>
                <MdIcecream size={25} />
                Sugar
            </strong>
            <Button size="sm">
                <span>Sugar Up</span>
                <BsCupStraw color="#FFF" size={22} />
            </Button>
        </Container>
    )
}
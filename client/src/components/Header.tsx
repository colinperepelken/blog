import styled from 'styled-components'
import { config } from '../config'

const HeaderWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
`

const Title = styled.h1`
    text-align: center;
`

const Header = () => (
    <HeaderWrapper>
        <Title className="underline">{config.title}</Title>
    </HeaderWrapper>
)

export default Header

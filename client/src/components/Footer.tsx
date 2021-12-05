import styled from 'styled-components'
import { config } from '../config'

const StyledFooter = styled.footer`
    margin-top: 6rem;
    text-align: center;
`

const Footer = () => {
    return (
        <StyledFooter>
            <p>
                Copyright &copy; {new Date().getFullYear()}{' '}
                <a href={config.copyrightUrl}>{config.copyrightText}</a>
            </p>
        </StyledFooter>
    )
}

export default Footer

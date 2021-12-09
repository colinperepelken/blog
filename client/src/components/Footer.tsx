import styled from 'styled-components'
import { config } from '../config'
import Link from './shared/Link'

const StyledFooter = styled.footer`
    margin-top: 6rem;
    text-align: center;
`

const Footer = () => {
    return (
        <StyledFooter>
            <p>
                Copyright &copy; {new Date().getFullYear()}{' '}
                <Link href={config.copyrightUrl}>{config.copyrightText}</Link>
            </p>
        </StyledFooter>
    )
}

export default Footer

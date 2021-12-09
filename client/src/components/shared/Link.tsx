import styled from 'styled-components'
import { Theme } from '../../features/theme/Theme'

const Link = styled.a`
    color: ${Theme.primary};
    text-decoration: none;
    opacity: 0.8;
    &:hover {
        opacity: 1;
    }
`

export default Link

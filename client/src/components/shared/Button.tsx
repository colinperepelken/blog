import styled from 'styled-components'
import { Theme } from '../../features/theme/Theme'

export interface IButtonProps {
    title: string
    onClick?: () => void
    primary?: boolean
}

const StyledButton = styled.button<Pick<IButtonProps, 'primary'>>`
    background-color: ${(props) =>
        props.primary ? Theme.primary : Theme.secondary};
    border-radius: 5px;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border: 1px solid transparent;
    &:hover {
        border-color: black;
    }
`

const Button = (props: IButtonProps) => {
    return <StyledButton>{props.title}</StyledButton>
}

export default Button

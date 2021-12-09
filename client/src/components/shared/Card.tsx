import styled from 'styled-components'
import { Theme } from '../../features/theme/Theme'
import Button, { IButtonProps } from './Button'

interface IProps {
    content: JSX.Element | string
    title?: string
    buttons?: IButtonProps[]
    onClick?: () => void
}

const StyledCard = styled.div`
    border: 1px solid ${Theme.border};
    box-shadow: 5px 10px 5px ${Theme.boxShadow};
    border-radius: 5px;
    padding: 1rem 3rem;
`

const CardButton = styled(Button)`
    margin-right: 0.5rem;
`

const CardTitle = styled.h2`
    color: ${Theme.primary};
    cursor: pointer;
`

const Card = (props: IProps) => (
    <StyledCard>
        <CardTitle onClick={props.onClick}>{props.title}</CardTitle>
        <div>{props.content}</div>
        {renderButtons(props.buttons)}
    </StyledCard>
)

const renderButtons = (buttons?: IButtonProps[]) => {
    return buttons?.map((buttonProps, index) => (
        <CardButton key={index} {...buttonProps}></CardButton>
    ))
}

export default Card

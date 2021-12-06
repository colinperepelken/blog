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
    buttons?.map((buttonProps, index) => (
        <Button key={index} {...buttonProps}></Button>
    ))
}

export default Card

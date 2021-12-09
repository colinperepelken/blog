import { ITheme } from '../Theme'

const BaseColors = {
    blackAlt: '#080F0F',
    blue: '#586BA4',
    green: '#59C9A5',
    brown: '#C19875',
    red: '#AF5B5B',
    lightGrey: '#ededed',
}

const DefaultTheme: ITheme = {
    primary: BaseColors.green,
    secondary: BaseColors.blue,
    background: BaseColors.blackAlt,
    border: BaseColors.red,
    boxShadow: BaseColors.lightGrey,
}

export default DefaultTheme

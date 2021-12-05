import { config } from '../../config'

export interface ITheme {
    primary: string
    secondary: string
    background: string
    border: string
}

export const Theme: ITheme = config.theme

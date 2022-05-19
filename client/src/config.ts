import DefaultTheme from './features/theme/templates/DefaultTheme'
import { ITheme } from './features/theme/Theme'
interface IConfig {
    title: string
    copyrightText: string
    copyrightUrl: string
    theme: ITheme
    apiHost: string
}

// TODO this could eventually be configurable using an 'admin' UI
export const config: IConfig = {
    title: "Colin's World",
    copyrightText: 'Colin Perepelken',
    copyrightUrl: 'https://perepelken.ca',
    theme: DefaultTheme,
    apiHost: 'http://localhost:3001',
}

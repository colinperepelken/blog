import DefaultTheme from './features/theme/templates/DefaultTheme'
import { ITheme } from './features/theme/Theme'
interface IConfig {
    title: string
    subtitle: string
    copyrightText: string
    theme: ITheme
    apiHost: string
    linkedInUrl: string
    githubUrl: string
    mailUrl: string
    blogEnabled: boolean
}

// TODO this could eventually be configurable using an 'admin' UI
export const config: IConfig = {
    title: 'Colin Perepelken',
    subtitle: 'Senior Software Engineer',
    copyrightText: 'Colin Perepelken',
    theme: DefaultTheme,
    apiHost: 'http://localhost:3001',
    linkedInUrl: 'https://www.linkedin.com/in/colin-perepelken/',
    githubUrl: 'https://github.com/colinperepelken',
    mailUrl: 'mailto:colin@perepelken.ca',
    blogEnabled: false,
}

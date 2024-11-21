interface IConfig {
    title: string
    subtitle: string
    copyrightText: string
    apiHost: string
    linkedInUrl: string
    githubUrl: string
    mailUrl: string
    isBlogEnabled: boolean
}

// TODO this could eventually be configurable using an 'admin' UI
export const config: IConfig = {
    title: 'Colin Perepelken',
    subtitle: 'Staff Software Developer',
    copyrightText: 'Colin Perepelken',
    apiHost: 'http://localhost:3001',
    linkedInUrl: 'https://www.linkedin.com/in/colin-perepelken/',
    githubUrl: 'https://github.com/colinperepelken',
    mailUrl: 'mailto:colin@perepelken.ca',
    isBlogEnabled: false,
}

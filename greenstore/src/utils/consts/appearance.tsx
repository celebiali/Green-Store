export const languages = [
    {
        key: 'tr',
        value: 'Türkçe',
        icon: 'tr.svg'
    },
    {
        key: 'en',
        value: 'English',
        icon: 'en.svg'
    }
]
export const getLanguageName = (langCode:any) => languages.find(l => l.key === langCode)?.value
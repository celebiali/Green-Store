export const languages = [
    {
        key: 'tr',
        value: 'Türkçe'
    },
    {
        key: 'en',
        value: 'English'
    }
]
export const getLanguageName = (langCode:any) => languages.find(l => l.key === langCode)?.value
export const languages = [
    {
        key: 'tr',
        value: 'Türkçe'
    },
    {
        key: 'az',
        value: 'Azərbaycan dili'
    },
    {
        key: 'en',
        value: 'English'
    }
]
export const getLanguageName = (langCode:any) => languages.find(l => l.key === langCode)?.value
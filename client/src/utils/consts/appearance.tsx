export const languages = [
  {
    key: "tr",
    value: "Türkçe",
    icon: "tr.svg",
  },
  {
    key: "en",
    value: "English",
    icon: "en.svg",
  },
];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getLanguageName = (langCode: any) =>
  languages.find((l) => l.key === langCode)?.value;

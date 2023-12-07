interface LanguageProps {
  languages: { key: string; value: string }[];
  i18n: { language: string; changeLanguage: (lang: string) => void };
}

const LanguageSelect = ({ languages, i18n }: LanguageProps) => {
  return (
    <select
      name={i18n.language.toUpperCase()}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      className="language-select"
    >
      {languages.map(
        ({ key, value }: { key: string; value: string }, index: number) => (
          <option key={index} value={key} className="language-option">
            {value}
          </option>
        )
      )}
    </select>
  );
};

export default LanguageSelect;

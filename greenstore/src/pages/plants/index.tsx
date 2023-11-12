import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function Plants() {
  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>
          {t("navbar.green-store")} - {t("navbar.plants")}
        </title>
      </Helmet>
      <div>{t("navbar.plants")}</div>
    </div>
  );
}
export default Plants;

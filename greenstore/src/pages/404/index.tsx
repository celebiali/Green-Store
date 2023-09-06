import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Index() {
  return (
    <>
      <Helmet>
        <title>Sayfa bulunamadı</title>
      </Helmet>
      <div>
        <h1>Sayfa bulunamadı</h1>
        <Link to="/">Anasayfaya dön</Link>
      </div>
    </>
  );
}
export default Index;

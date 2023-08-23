import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

function Page404() {
    return (
        <Helmet>
            <div>
                <h1>Sayfa bulunamadı</h1>
                <Link to="/">Anasayfaya dön</Link>
            </div>
        </Helmet>
    );
}
export default Page404;
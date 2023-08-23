import {Helmet} from "react-helmet";

function Home() {
    return (
        <div>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Bu sayfa ana sayfadır." />
            </Helmet>
            <div>Home</div>
        </div>
    );
}
export default Home;
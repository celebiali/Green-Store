import {Helmet} from "react-helmet";

function About() {
    return (
        <div>
            <Helmet>
                <title>About</title>
                <meta name="description" content="Bu sayfa ana sayfadır." />
            </Helmet>
            <div>About</div>
        </div>
    );
}
export default About;
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="about_container">
      <Helmet>
        <title>
          {t("navbar.about")} - {t("navbar.green-store")}
        </title>
      </Helmet>
      <div>
        <div className="about_title">
          <h1>About</h1>
        </div>
        <div>
          <hr />
        </div>
      </div>
      <div>
        <h3>We provide fresh and healthy plants for your space</h3>
        <p>
          Tincidunt ut pellentesque arcu molestie dolor, nunc feugiat sit mauris
          semper platea urna, sapien fermentum venenatis etiam enim ullamcorper
          phasellus tortor justo sapien faucibus in adipiscing risus adipiscing
          bibendum nec eget tincidunt sed.
        </p>
      </div>
      <div>
        <h1>OUR STORY</h1>
        <article>
          Tristique dapibus porta viverra sit accumsan integer semper dolor
          etiam id iaculis feugiat egestas urna est magna euismod donec
          facilisis sed integer orci ac.
        </article>
        <article>
          Mi et tincidunt ut pellentesque arcu molestie dolor, nunc feugiat sit
          mauris semper platea urna, sapien fermentum venenatis etiam enim
          ullamcorper phasellus tortor justo, et, pellentesque pellentesque
          sapien faucibus in adipiscing risus adipiscing bibendum in nec eget
          tincidunt in in sed magna arcu molestie nec mauris quisque.
        </article>
        <article>
          Feugiat lacus sagittis, mauris, lobortis velit ullamcorper vitae in
          volutpat faucibus elementum, sodales orci mi fames molestie venenatis
          nunc hendrerit.
        </article>
      </div>
      <div>
        <h3>
          Massa aliquam montes, odio porttitor sit ac maecenas interdum ut
          tincidunt nisl erat quam eu natoque in nisl, lobortis sapien in nec
          ullamcorper vel.
        </h3>
      </div>
      <div>
        <div>
          <p>image</p>
        </div>
        <div>
          <p>EMILY EVERGREEN</p>
          <p>Founder, Owner</p>
        </div>
      </div>
    </div>
  );
}
export default About;

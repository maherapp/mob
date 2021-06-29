import Head from "next/head";
import NavbarAbout from "../comonents/navAbout";
import Footer from "../comonents/footer";

export default function About() {
  return (
    <>
        <Head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"/>
        <link rel="stylesheet" href="css/about.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        </Head>
      <NavbarAbout/>
      <section className="about">
        <div className="left">
          <h1 className="title">Who we are</h1>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
            scelerisque justo, id scelerisque velit. Cras non scelerisque justo,
            id scelerisque velit. Aliquam eget ligula libero. Suspendisse ac
            sollicitudin mi. Quisque ullamcorper fermentum tempus.
          </p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
            scelerisque justo, id scelerisque velit. Cras non scelerisque justo,
            id scelerisque velit. Aliquam eget ligula libero. Suspendisse ac
            sollicitudin mi. Quisque ullamcorper fermentum tempus.
          </p>
        </div>
        <div className="right">
          <img src="./img/about2.jpg" />
        </div>
      </section>

      <section className="pvp">
        <div>
          <h2 className="title">Principle</h2>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
            scelerisque justo, id scelerisque velit. Cras non scelerisque justo,
            id scelerisque velit. Aliquam eget ligula libero. Suspendisse ac
            sollicitudin mi. Quisque ullamcorper fermentum tempus.
          </p>
        </div>
        <div>
          <h2 className="title">Vision</h2>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
            scelerisque justo, id scelerisque velit. Cras non scelerisque justo,
            id scelerisque velit. Aliquam eget ligula libero. Suspendisse ac
            sollicitudin mi. Quisque ullamcorper fermentum tempus.
          </p>
        </div>
        <div>
          <h2 className="title">Policy</h2>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
            scelerisque justo, id scelerisque velit. Cras non scelerisque justo,
            id scelerisque velit. Aliquam eget ligula libero. Suspendisse ac
            sollicitudin mi. Quisque ullamcorper fermentum tempus.
          </p>
        </div>
      </section>
     <Footer/>
    </>
  );
}

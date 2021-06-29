import Footer from "../comonents/footer";
import Head from "next/head";
import Slider from "./slider";
import Link from "next/link";


export default function Decoration() {
  return (
    <>
    <Head>
      <link rel="stylesheet" href="css/service.css"/>
    </Head>
      <nav className="service-nav">
        <div>
          <Link href="/">Home</Link>
          <Link href="./decoration">
            <span>Decoration</span>
          </Link>
          <Link href="./designing">Designing</Link>
          <Link href="./lighting">Lighting</Link>
          <Link href="./furniture">Furniture</Link>
        </div>
      </nav>
      <div className="service-container">
        <div className="service-description">
          <h2>
            {" "}
            <img src="../img/decoration.svg" /> Decoration
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
            scelerisque justo, id scelerisque velit. Cras non scelerisque justo,
            id scelerisque velit. Aliquam eget ligula libero. Suspendisse ac
            sollicitudin mi. Quisque ullamcorper fermentum tempus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
            scelerisque justo, id scelerisque velit. Cras non scelerisque justo,
            id scelerisque velit. Aliquam eget ligula libero. Suspendisse ac
            sollicitudin mi. Quisque ullamcorper fermentum tempus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
            scelerisque justo, id scelerisque velit. Cras non scelerisque justo,
            id scelerisque velit. Aliquam eget ligula libero. Suspendisse ac
            sollicitudin mi. Quisque ullamcorper fermentum tempus.
          </p>
        </div>
        <Slider/>
        <Footer />
      </div>
    </>
  );
}

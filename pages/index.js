import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../comonents/navbar";
import Footer from "../comonents/footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
          />
          <link rel="stylesheet" href="css/style.css" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />
    
          <title> ALkayan Website</title>
        </Head>
        <section className="intro">
          <div className="intro-bg"></div>
          <Navbar />
          <div classNamen="container">
            <h1>ALkayan Company </h1>
            <h3> For interior design </h3>
            <h3> Since 2008</h3>
          </div>
        </section>
        <section className="service-section">
          <h1>Our Services</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="container">
            <div className="service">
              <div className="up">
                <div className="decoration">
                  <div>
                    <img src="/img/decoration.svg" alt="Logo" />
                  </div>
                  <div>
                    <h3>Decoration</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec.
                    </p>
                    <Link href="./decoration">
                      <span>
                        See more
                        <i className="fas fa-angle-double-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="designing">
                  <div>
                    <img src="/img/designing.svg" alt="Logo" />
                  </div>
                  <div>
                    <h3>Designing</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec.
                    </p>
                    <Link href="./designing">
                      <span>
                      See more  <i className="fas fa-angle-double-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="down">
                <div className="lighting">
                  <div>
                    <img src="/img/lighting.svg" alt="Logo" />
                  </div>
                  <div>
                    <h3>Lighting</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec.
                    </p>
                    <Link href="./lighting">
                      <span>
                      See more <i className="fas fa-angle-double-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="furniture">
                  <div>
                    <img src="/img/furniture.svg" alt="Logo" />
                  </div>
                  <div>
                    <h3>Furniture</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec.
                    </p>
                    <Link href="./furniture">
                      <span>
                      See more <i className="fas fa-angle-double-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </section>
          <section  className="last-work">
            <div className="title">
                <h1>Last Work</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="last-work-container">
                <div className="work">
                    <img src="./img/livingroom.jpg"/>
                    <h2 className=" work-title">Living room design</h2>
                    <p className="work-date" ><i className="far fa-calendar-alt"></i> 15/4/2021  <i class="far fa-user"></i> Name</p>
                    <p className="work-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis voluptas, aliquam pariatur culpa earum velit dolor eveniet repellat nemo! </p>
                </div>
                <div className="work">
                    <img src="./img/office.jpg"/>
                    <h2 className=" work-title">Office design</h2>
                    <p className="work-date" ><i className="far fa-calendar-alt"></i> 28/3/2021  <i class="far fa-user"></i> Name</p>
                    <p className="work-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis voluptas, aliquam pariatur culpa earum velit dolor eveniet repellat nemo! </p>
                </div>
                <div className="work">
                    <img src="./img/kitchen.jpg"/>
                    <h2 className=" work-title">Kitchen design</h2>
                    <p className="work-date" ><i className="far fa-calendar-alt"></i> 4//52021  <i class="far fa-user"></i> Name</p>
                    <p className="work-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Perferendis voluptas, aliquam pariatur culpa earum velit dolor eveniet repellat nemo! </p>
                </div>
            </div>  
            <div className="seemorework">
              <Link href="./ourWork"><span>See more work</span></Link>
            </div>
        </section>
      
      </div>
      <Footer />
    </>
  );
}

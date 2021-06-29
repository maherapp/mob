import Head from "next/head";
import NavbarWork from "../comonents/navWork";
import Footer from "../comonents/footer";

export default function OurWork() {
  return (
    <>
    <Head>
    <link rel="stylesheet" href="css/ourWork.css" />
    <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />
    </Head>
      <NavbarWork />
      <div className="gallery">
        <h2>Our Work  gallery</h2>
        <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec.</p>
        </div>
      <section className="ourWork">
        <div className="one">
          <div className="item" >
            <img src="/img/livingroom.jpg" />
            <p className="work-date">
              <i className="far fa-calendar-alt"></i> 15/4/2021{" "}
              <i className="far fa-user"></i> Name
            </p>
          </div>
          <div className="item">
            <img src="/img/livingroom.jpg" />
            <p className="work-date">
              <i className="far fa-calendar-alt"></i> 15/4/2021{" "}
              <i className="far fa-user"></i> Name
            </p>
          </div>
          <div className="item">
            <img src="/img/livingroom.jpg" />
            <p className="work-date">
              <i className="far fa-calendar-alt"></i> 15/4/2021{" "}
              <i className="far fa-user"></i> Name
            </p>
          </div>
        </div>
        <div className="tow">
          <div className="item">
            <img src="/img/livingroom.jpg" />
            <p className="work-date">
              <i className="far fa-calendar-alt"></i> 15/4/2021{" "}
              <i className="far fa-user"></i> Name
            </p>
          </div>
          <div className="item">
            <img src="/img/livingroom.jpg" />
            <p className="work-date">
              <i className="far fa-calendar-alt"></i> 15/4/2021{" "}
              <i className="far fa-user"></i> Name
            </p>
          </div>
          <div className="item">
            <img src="/img/livingroom.jpg" />
            <p className="work-date">
              <i className="far fa-calendar-alt"></i> 15/4/2021{" "}
              <i className="far fa-user"></i> Name
            </p>
          </div>
        </div>
        <div className="three">
          <div className="item">
            <img src="/img/livingroom.jpg" />
            <p className="work-date">
              <i className="far fa-calendar-alt"></i> 15/4/2021{" "}
              <i className="far fa-user"></i> Name
            </p>
          </div>
          <div className="item">
            <img src="/img/livingroom.jpg" />
            <p className="work-date">
              <i className="far fa-calendar-alt"></i> 15/4/2021{" "}
              <i className="far fa-user"></i> Name
            </p>
          </div>
          <div className="item">
            <img src="/img/livingroom.jpg" />
            <p className="work-date">
              <i className="far fa-calendar-alt"></i> 15/4/2021{" "}
              <i className="far fa-user"></i> Name
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

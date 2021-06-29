import Head from "next/head";
import NavbarContact from "../comonents/navContact";
import Footer from "../comonents/footer";
import GoogleApiWrapper from "../comonents/map";
export default function Contact() {
  return (
    <>
    <Head>
    <link rel="stylesheet" href="css/contact.css" />
    </Head>
      <NavbarContact />
      <section className="contact">
        <div className="left">
          <h2 className="title">Contact details</h2>
          <div className="lmp">
            <h3>Location</h3>
            <p>street-square-city</p>
          </div>
          <div className="lmp">
            <h3>Mail</h3>
            <p>office@example.org</p>
          </div>
          <div className="lmp">
            <h3>Phone</h3>
            <p>23456789876543</p>
          </div>
        </div>

        <div className="right">
          <h2 className="title">Get in touch</h2>
          <form className="contact-form">
            <input type="text" name="name" placeholder="name" />
            <input type="email" name="email" placeholder="email" />
            <input type="text" name="subject" placeholder="subject" />
            <textarea name="message" placeholder="message"></textarea>
            <button type="submit" name="submit">
              Send
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

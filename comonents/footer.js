import Link from "next/link";
import Head from "next/head";

export default function Footer() {
  return (
    <>
      <Head>
      <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
          />
      </Head>
          <footer class="footer">
      <section className="semi-Footer">
        <div className="Alkayan-section">
          <h2>Alkayan</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
            cupiditate laboriosam, error address accusantium sequi et laborum?
            Doloremque accusamus optio cumque lorem ipsum dolar.
          </p>
        </div>

        <div className="contact-section">
          <h2>Contact us</h2>
          <p>
            <span>Email: </span>office@example.org
          </p>
          <p>
            <span>Phone: </span>23456789876543
          </p>
          <p>
            <span>Address: </span>street-square-city
          </p>
        </div>

        <div className="links-section">
          <h2>Quick Links</h2>

          <Link href="./about">About us</Link>
          <br />
          <Link href="./">Term of service</Link>
          <br />
          <Link href="./">Privacy policy</Link>
          <br />
        </div>

        <div className="follow-section">
          <h2>Follow us</h2>
          <div className="social">
            <Link href="./">
              <span><i className="fab fa-facebook-square"></i></span>
            </Link>
            <Link href="./">
              <span> <i className="fab fa-instagram-square"></i></span>
            </Link>
            <Link href="./">
              <span><i className="fab fa-linkedin"></i></span>
            </Link>
            <Link href="./">
              <span><i className="fab fa-twitter-square"></i></span>
            </Link>
            <Link href="./">
              <span><i className="fab fa-whatsapp-square"></i></span>
            </Link>
          </div>
        </div>
      </section>
      <div className="footer-title">
        <span>
          2021&copy; <a href="#">ALkayan Company</a>
        </span>
      </div>
      </footer>
    </>
  );
}

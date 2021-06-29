import Link from "next/link";

export default function NavbarAbout() {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-bar-container">
          <div className="logo">
            <img src="./img/xing-logo.svg" alt="Logo" />
          </div>
          <div id="navbar">
            <Link href="/">
              Home
            </Link>
            <Link href="/about"><span>About</span></Link>
            <Link href="/ourWork">Our Work</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

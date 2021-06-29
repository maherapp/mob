import Link from "next/link";

export default function NavbarShop() {
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
            <Link href="/about">About</Link>
            <Link href="/ourWork">Our Work</Link>
            <Link href="/shop"><span>Shop</span></Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

import Link from "next/link";

export default function NavbarWork() {
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
            <Link href="/ourWork"><span>Our Work</span></Link>
            <Link href="/shop">Shop</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

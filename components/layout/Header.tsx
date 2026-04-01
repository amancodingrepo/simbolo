"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="tf-header header2">
      <div
        className="header-inner"
        style={{ maxWidth: "1100px", padding: "12px 12px 12px 40px" }}
      >
        <Link href="/" className="logo-site">
          <img
            src="/assets/aman/logo.png"
            alt=""
            style={{ height: "44px", width: "auto" }}
          />
        </Link>
        <div className="box-navigation">
          <ul className="nav-menu-main">
            <li className="menu-item">
              <Link href="/" className="item-link link1 active">
                Home
              </Link>
            </li>
            <li className="menu-item">
              <Link href="/service" className="item-link link1">
                Services
              </Link>
            </li>
            <li className="menu-item">
              <Link href="/work" className="item-link link1">
                Works
              </Link>
            </li>
            <li className="menu-item">
              <Link href="/blog" className="item-link link1">
                Blog
              </Link>
            </li>
            <li className="menu-item">
              <Link href="/contact" className="item-link link1">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/contact" className="tf-btn d-lg-flex d-none">
          Scale Your Brand
        </Link>
        <a
          href="#"
          className="tf-btn open-mb-menu mobile-menu d-lg-none d-flex"
        >
          <i className="icon icon-grip-lines-solid"></i>
        </a>
      </div>
    </header>
  );
}

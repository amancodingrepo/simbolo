'use client';

import Link from "next/link";

export default function Header() {
  return (
    <header className="tf-header header2">
      <div className="header-inner">
        <Link href="/" className="logo-site">
          <img src="/assets/images/logo/logo.svg" alt="" />
        </Link>
        <div className="box-navigation">
          <ul className="nav-menu-main">
            <li className="menu-item has-child">
              <a href="#" className="item-link link1 active">Home</a>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Link href="/" className="item-link link1 active">Home Gradient</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link href="/about" className="item-link link1">About</Link>
            </li>
            <li className="menu-item has-child">
              <a href="#" className="item-link link1">Services</a>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Link href="/service" className="item-link link1">Services</Link>
                </li>
                <li className="sub-menu-item">
                  <Link href="/service/single" className="item-link link1">Services single</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item has-child">
              <a href="#" className="item-link link1">Works</a>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Link href="/work" className="item-link link1">Works</Link>
                </li>
                <li className="sub-menu-item">
                  <Link href="/work/single" className="item-link link1">Works single</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item has-child">
              <a href="#" className="item-link link1">Blog</a>
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Link href="/blog/three-columns" className="item-link link1">Blog grid 3</Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <Link href="/contact" className="item-link link1">Contact</Link>
            </li>
          </ul>
        </div>
        <Link href="/contact" className="tf-btn d-lg-flex d-none">
          Scale Your Brand
        </Link>
        <a href="#" className="tf-btn open-mb-menu mobile-menu d-lg-none d-flex">
          <i className="icon icon-grip-lines-solid"></i>
        </a>
      </div>
    </header>
  );
}

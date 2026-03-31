import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-image">
        <img className="effectFade fadeUp" src="/assets/aman/footer.png" alt="" />
      </div>
      <div className="container">
        <div className="footer-content">
          <Link href="/" className="footer-logo">
            <div style={{ width: '72px', height: '72px', borderRadius: '18px', background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
              <img src="/assets/aman/logogo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          </Link>
          <div className="title h6 fw-semibold">Scale <br /> with Simbolo on social</div>
          <div className="text">Get the latest growth strategies and visual trends!</div>
          <div className="tf-social-1 justify-content-center">
            <a href="https://www.instagram.com/" target="_blank" className="text-body-1 fw-semibold">
              Instagram
              <div className="social-item">
                <i className="icon icon-instagram"></i>
              </div>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" className="text-body-1 fw-semibold">
              Linkedin
              <div className="social-item">
                <i className="icon icon-linkedin-in"></i>
              </div>
            </a>
            <a href="https://www.facebook.com/" target="_blank" className="text-body-1 fw-semibold">
              Facebook
              <div className="social-item">
                <i className="icon icon-facebook-f"></i>
              </div>
            </a>
            <a href="https://x.com/" target="_blank" className="text-body-1 fw-semibold">
              Twitter / X
              <div className="social-item">
                <i className="icon icon-twitter-x"></i>
              </div>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <ul className="footer-links d-flex gap-24 align-items-center">
            <li>
              <Link href="/about" className="fw-semibold link-underline link1">About</Link>
            </li>
            <li>
              <Link href="/service" className="fw-semibold link-underline link1">Services</Link>
            </li>
            <li>
              <Link href="/work" className="fw-semibold link-underline link1">Works</Link>
            </li>
            <li>
              <Link href="/contact" className="fw-semibold link-underline link1">Contact</Link>
            </li>
          </ul>
          <p className="text-secondary coppy-rights text-center">© 2026 Simbolo. All Rights Reserved.</p>
          <a href="#" className="action-go-top d-flex gap-8 align-items-center justify-content-end link1">
            <span className="fw-semibold">Back to top</span>
            <i className="icon icon-long-arrow-alt-up-solid fs-20"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

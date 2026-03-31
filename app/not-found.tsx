import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-404">
      <div className="container">
        <div className="content-404">
          <h1>404</h1>
          <p>Page Not Found</p>
          <Link href="/">Back to Home</Link>
        </div>
      </div>
    </section>
  );
}

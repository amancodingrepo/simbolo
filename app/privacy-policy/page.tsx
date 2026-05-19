import type { Metadata } from "next";
import PageTitleSection from "@/components/sections/PageTitleSection";

export const metadata: Metadata = {
  title: "Privacy Policy | Simbolo",
  description:
    "Official privacy policy for The Simbolo Multimedia and its website services.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageTitleSection
        title="Privacy Policy"
        backgroundImage="/assets/aman/hero.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy-policy" },
        ]}
      />

      <div className="box-white">
        <section className="section-privacy-policy flat-spacing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="heading-section center mb-48">
                  <div className="heading-sub fw-semibold effectFade fadeUp">
                    Legal
                  </div>
                  <div className="heading-title text-gradient-3 effectFade fadeRotateX">
                    PRIVACY POLICY
                  </div>
                </div>

                <div className="privacy-policy-card effectFade fadeUp">
                  <p className="text-body-1 text-secondary mb-8">
                    The Simbolo Multimedia
                  </p>
                  <p className="text-body-1 text-secondary mb-24">
                    Effective Date: May 18, 2026 | Website:{" "}
                    <a
                      href="https://www.thesimbolo.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fw-semibold link-underline link1"
                    >
                      https://www.thesimbolo.com/
                    </a>
                  </p>
                  <p className="text-body-1 text-secondary mb-32">
                    Welcome to The Simbolo Multimedia. We are a premier
                    multimedia marketing agency committed to protecting your
                    personal information and your right to privacy. This Privacy
                    Policy governs the privacy practices of our website
                    (https://www.thesimbolo.com/) and outlines how we collect,
                    use, disclose, and safeguard your information when you
                    utilize our services, including digital marketing, social
                    media management, creative design, branding, and multimedia
                    campaign execution.
                  </p>
                  <p className="text-body-1 text-secondary mb-32">
                    Please read this Privacy Policy carefully. By accessing or
                    using our website and services, you acknowledge that you
                    have read, understood, and agreed to be bound by all the
                    terms outlined herein. If you do not agree with the terms
                    of this Privacy Policy, please discontinue access
                    immediately.
                  </p>

                  <h3 className="fw-semibold mb-12">1. Information We Collect</h3>
                  <p className="text-secondary mb-12">
                    We collect information about our clients and website
                    visitors in a variety of ways to provide optimized marketing
                    solutions:
                  </p>
                  <ul className="text-secondary mb-24">
                    <li>
                      Personal Data: Personally identifiable information, such
                      as your name, corporate email address, telephone number,
                      company name, and designation, which you voluntarily
                      provide when filling out contact forms, requesting service
                      quotes, or subscribing to our newsletters.
                    </li>
                    <li>
                      Derivative Data: Technical information automatically
                      captured by our servers when you access our website,
                      including your IP address, browser type, operating system,
                      access times, and the specific pages viewed prior to and
                      after navigating our site.
                    </li>
                    <li>
                      Client Project Data: Strategic business data, creative
                      briefs, brand assets, temporary social media credentials,
                      and analytical historical parameters shared intentionally
                      during the onboarding process to execute marketing
                      mandates.
                    </li>
                  </ul>

                  <h3 className="fw-semibold mb-12">2. How We Use Information</h3>
                  <p className="text-secondary mb-12">
                    The information collected is used systematically to deliver
                    high-quality marketing services and ensure an efficient
                    client workflow. Specifically, we utilize your data to:
                  </p>
                  <ul className="text-secondary mb-32">
                    <li>
                      Configure, administer, and manage client accounts and
                      active brand portfolios.
                    </li>
                    <li>
                      Deliver customized marketing, premium branding, and
                      multimedia content assets.
                    </li>
                    <li>
                      Formulate tailored commercial quotations, project
                      proposals, and strategic creative pitches.
                    </li>
                    <li>
                      Send targeted promotional communications, industry
                      insights, and agency updates (with the option to opt-out
                      at any time).
                    </li>
                    <li>
                      Analyze website traffic and consumer metrics to improve
                      platform navigation and engagement layout.
                    </li>
                    <li>
                      Maintain operational safety by monitoring and preventing
                      fraudulent transactions or security vulnerabilities.
                    </li>
                  </ul>

                  <h3 className="fw-semibold mb-12">
                    3. Disclosure of Your Information
                  </h3>
                  <p className="text-secondary mb-12">
                    We maintain a strict policy against selling, renting, or
                    trading personal data to unauthorized third parties.
                    However, information may be shared under the following
                    structured scenarios:
                  </p>
                  <ul className="text-secondary mb-32">
                    <li>
                      Legal Compliance: Where required by legislative mandates,
                      court orders, or governmental regulatory authorities to
                      protect legal rights, human safety, or corporate asset
                      security.
                    </li>
                    <li>
                      Third-Party System Providers: Controlled exposure to
                      trusted third-party cloud infrastructure, automated email
                      delivery systems, analytical platforms, and CRM tools
                      operating explicitly under our operational directives.
                    </li>
                    <li>
                      Corporate Transformations: In the event of a structural
                      merger, asset divestiture, consolidation, or corporate
                      acquisition, data assets may transfer safely as part of
                      business continuity provisions.
                    </li>
                  </ul>

                  <h3 className="fw-semibold mb-12">
                    4. Cookies and Tracking Technologies
                  </h3>
                  <p className="text-secondary mb-32">
                    Our website utilizes secure digital cookies, tracking
                    pixels, and web beacons to optimize platform performance and
                    map visitor retention. Cookies help analyze traffic patterns
                    to customize your future interactions. You retain full
                    autonomy within your native web browser to modify settings
                    to block or delete cookies; however, disabling these tools
                    may partially impact the execution of specific interactive
                    features on our portal.
                  </p>

                  <h3 className="fw-semibold mb-12">
                    5. Third-Party Web Links
                  </h3>
                  <p className="text-secondary mb-32">
                    Our portal may occasionally display links to third-party
                    digital web platforms, integrated application environments,
                    or client reference portfolios. This Privacy Policy applies
                    strictly to operations contained within
                    https://www.thesimbolo.com/. We hold no responsibility for
                    the external privacy terms, security setups, or data
                    harvesting methodologies utilized by external third-party
                    entities.
                  </p>

                  <h3 className="fw-semibold mb-12">
                    6. Data Security Measures
                  </h3>
                  <p className="text-secondary mb-32">
                    We deploy robust technical, administrative, and physical
                    security measures designed to shield your personal data from
                    unauthorized extraction, alteration, loss, or misuse. While
                    we continuously elevate our digital defenses, no method of
                    electronic transmission or decentralized digital storage can
                    be guaranteed as absolute proof against interception;
                    therefore, we advise shared caution during online
                    information transfers.
                  </p>

                  <h3 className="fw-semibold mb-12">
                    7. Policy Concerning Minors
                  </h3>
                  <p className="text-secondary mb-32">
                    Our multimedia marketing operations are curated specifically
                    for business entities and professional individuals. We do
                    not knowingly gather or request personal data from minors
                    under the age of 13. If it comes to light that any data
                    belonging to a minor has been recorded inadvertently, we
                    will immediately purge the record from our system servers.
                  </p>

                  <h3 className="fw-semibold mb-12">
                    8. Client Rights and Preferences
                  </h3>
                  <p className="text-secondary mb-32">
                    You maintain clear authority over your personal
                    information. You can connect with our administrative team at
                    any point to inspect, update, correct, or request the
                    systematic removal of your business records from our active
                    marketing lists. To stop receiving automated agency
                    newsletters or marketing emails, simply click the
                    "Unsubscribe" mechanism included at the foot of our digital
                    communications.
                  </p>

                  <h3 className="fw-semibold mb-12">
                    9. Contact and Grievance Redressal
                  </h3>
                  <p className="text-secondary mb-12">
                    For clarifications, updates, data removal requests, or
                    queries regarding this Privacy Policy, please get in touch
                    with our office using the verified agency credentials below:
                  </p>
                  <p className="text-secondary mb-8">
                    <strong>Agency:</strong> The Simbolo Multimedia
                  </p>
                  <p className="text-secondary mb-8">
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://www.thesimbolo.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fw-semibold link-underline link1"
                    >
                      https://www.thesimbolo.com/
                    </a>
                  </p>
                  <p className="text-secondary mb-8">
                    <strong>Address:</strong> 1st Floor, Sahil Regency, The
                    Simbolo Multimedia, Plot No. ED/149, Ring Rd, near Khajrana
                    square, IDA, Scheme, Indore, Madhya Pradesh 452016
                  </p>
                  <p className="text-secondary mb-8">
                    <strong>Phone:</strong> 089829 48199
                  </p>
                  <p className="text-secondary mb-0">
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:thesimbolomultimedia@gmail.com"
                      className="fw-semibold link-underline link1"
                    >
                      thesimbolomultimedia@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

import "../../styles/Subscription.css";
export function Subscription() {
  return (
    <>
      <body className="body">
        <section id="pricing" class="pricing-content section-padding">
          <div class="container">
            <div class="section-title text-center">
              <h1>Pricing Plan</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div class="row text-center">
              <div
                class="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.1s"
                data-wow-offset="0"
              >
                <div class="single-pricing">
                  <div class="price-head">
                    <h2>Starter</h2>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <h1 class="price">$29</h1>
                  <h5>Monthly</h5>
                  <ul>
                    <li>5 website</li>
                    <li>50GB Disk Space</li>
                    <li>50 Email Accounts</li>
                  </ul>
                  <a href="#">Get start</a>
                </div>
              </div>
              <div
                class="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
                data-wow-offset="0"
              >
                <div class="single-pricing">
                  <div class="price-head">
                    <h2>popular</h2>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <h1 class="price">$49</h1>
                  <h5>Monthly</h5>
                  <ul>
                    <li>10 website</li>
                    <li>50GB Disk Space</li>
                    <li>50 Email Accounts</li>
                    <li>50GB Monthly Bandwidth</li>
                    <li>10 Subdomains</li>
                  </ul>
                  <a href="#">Get start</a>
                </div>
              </div>
              <div
                class="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="0.3s"
                data-wow-offset="0"
              >
                <div class="single-pricing single-pricing-white">
                  <div class="price-head">
                    <h2>Advance</h2>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span class="price-label">Best</span>
                  <h1 class="price">$69</h1>
                  <h5>Monthly</h5>
                  <ul>
                    <li>15 website</li>
                    <li>50GB Disk Space</li>
                    <li>50 Email Accounts</li>
                    <li>50GB Monthly Bandwidth</li>
                    <li>10 Subdomains</li>
                    <li>15 Domains</li>
                    <li>Unlimited Support</li>
                  </ul>
                  <a href="#">Get start</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

import React from "react";
import "../../styles/ContactUs.css";

export function ContactUs() {
  return (
    <body className="contact-background">
      <div class="background">
        <div class="container">
          <div class="screen">
            <div class="screen-header">
              <div class="screen-header-left">
                <div class="screen-header-button close"></div>
                <div class="screen-header-button maximize"></div>
                <div class="screen-header-button minimize"></div>
              </div>
              <div class="screen-header-right">
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
              </div>
            </div>
            <div class="screen-body">
              <div class="screen-body-item left">
                <div class="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div class="app-contact">CONTACT INFO : +92 03 204 891 965</div>
              </div>
              <div class="screen-body-item">
                <div class="app-form">
                  <div class="app-form-group">
                    <input
                      class="app-form-control"
                      placeholder="NAME"
                      value="Full Name"
                    />
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" placeholder="EMAIL" />
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" placeholder="CONTACT NO" />
                  </div>
                  <div class="app-form-group message">
                    <input class="app-form-control" placeholder="MESSAGE" />
                  </div>
                  <div class="app-form-group buttons">
                    <button class="app-form-button">CANCEL</button>
                    <button class="app-form-button">SEND</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

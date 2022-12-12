import React, { Component } from "react";
import { Container, Row, Col, Navbar, Nav, Button } from "react-bootstrap";
export default class MyFooter extends Component {
  render() {
    return (
      <Container id="footing" className="smaller mt-5">
        {/* Footer */}
        <footer className="page-footer font-small indigo">
          {/* Footer Links */}
          <div className="container text-center text-md-left">
            {/* Grid row */}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-2 mx-auto">
                {/* Links */}
                <img
                  style={{ width: "8rem" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/1024px-LinkedIn_2021.svg.png"
                  alt="..."
                />
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="disabled">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#!">Community Guidelines</a>
                  </li>
                  <li>
                    <a href="#!">Privacy & Terms</a>
                  </li>
                  <li>
                    <a href="#!">Sales Solutions</a>
                  </li>
                  <li>
                    <a href="#!">Safety Center</a>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
              <hr className="clearfix w-100 d-md-none" />
              {/* Grid column */}
              <div className="col-md-2 mx-auto">
                {/* Links */}

                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Accessibility</a>
                  </li>
                  <li>
                    <a href="#!">Careers</a>
                  </li>
                  <li>
                    <a href="#!">Ad Choices</a>
                  </li>
                  <li>
                    <a href="#!">Mobile</a>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
              <hr className="clearfix w-100 d-md-none" />
              {/* Grid column */}
              <div className="col-md-2 mx-auto">
                {/* Links */}

                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Talent Solutions</a>
                  </li>
                  <li>
                    <a href="#!">Marketing Solutions</a>
                  </li>
                  <li>
                    <a href="#!">Advertising</a>
                  </li>
                  <li>
                    <a href="#!">Small Business</a>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
              <hr className="clearfix w-100 d-md-none" />
              {/* Grid column */}
              <div className="col-md-2 mx-auto">
                {/* Links */}

                <ul className="list-unstyled">
                  <li>
                    <a href="#!">
                      <h4>Questions?</h4>
                    </a>
                    <p>Visit our Help Center</p>
                  </li>
                  <li>
                    <a href="#!" type="disabled">
                      <h5>Manage your account in privacy</h5>
                    </a>
                    <p>Go to your Settings</p>
                  </li>
                </ul>
              </div>
              <hr className="clearfix w-100 d-md-none" />
              {/* Grid column */}
              <div className="col-md-2 mx-auto">
                {/* Links */}

                <ul className="list-unstyled">
                  <li>
                    <label for="cars">Select Language</label>
                    <select style={{ width: "18rem" }} name="cars" id="cars">
                      <option value="eng">English(English)</option>
                      <option value="eng">English(English)</option>
                      <option value="eng">English(English)</option>
                      <option value="eng">English(English)</option>
                      <option value="eng">English(English)</option>
                      <option value="eng">English(English)</option>
                      <option value="eng">English(English)</option>
                      <option value="eng">English(English)</option>
                      <option value="eng">English(English)</option>
                      <option value="eng">English(English)</option>
                      <option value="eng">English(English)</option>
                      <option value="eng">English(English)</option>
                      <option value="eng">English(English)</option>
                      <option value="eng">English(English)</option>
                      <option value="eng">English(English)</option>
                      <option value="eng">English(English)</option>
                      <option value="eng">English(English)</option>
                      <option value="eng">English(English)</option>
                      <option value="eng">English(English)</option>
                      <option value="eng">English(English)</option>
                      <option value="eng">English(English)</option>
                      <option value="eng">English(English)</option>
                      <option value="eng">English(English)</option>
                      <option value="eng">English(English)</option>
                      <option value="eng">English(English)</option>
                      <option value="eng">English(English)</option>
                    </select>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
          {/* Footer Links */}
          {/* Copyright */}
          <div className="footer-copyright text-start py-3">
            LinkedIn Corporation © 2022
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </Container>
    );
  }
}

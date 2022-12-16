import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
export default class MyFooter extends Component {
  render() {
    return (
      <Container
        id="footing"
        className="smaller mt-5"
        style={{ fontSize: "13  px" }}
      >
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
                  className="mb-2"
                  style={{ width: "8rem" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/1024px-LinkedIn_2021.svg.png"
                  alt="..."
                />
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#!" className="text-secondary">
                      About
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-secondary">
                      Community Guidelines
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-secondary">
                      Privacy & Terms
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-secondary">
                      Sales Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-secondary">
                      Safety Center
                    </a>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
              <hr className="clearfix w-100 d-md-none" />
              {/* Grid column */}
              <div className="col-md-2 mx-auto">
                {/* Links */}

                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#!" className="text-secondary">
                      Accessibility
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-secondary">
                      Careers
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-secondary">
                      Ad Choices
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-secondary">
                      Mobile
                    </a>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
              <hr className="clearfix w-100 d-md-none" />
              {/* Grid column */}
              <div className="col-md-2 mx-auto">
                {/* Links */}

                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#!" className="text-secondary">
                      Talent Solutions
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-secondary">
                      Marketing Solutions
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-secondary">
                      Advertising
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-secondary">
                      Small Business
                    </a>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
              <hr className="clearfix w-100 d-md-none" />
              {/* Grid column */}
              <div className="col-md-3 mx-auto">
                {/* Links */}

                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-secondary">
                      <h6>
                        <AiFillQuestionCircle /> Questions?
                      </h6>
                    </a>
                    <p className=" text-secondary">Visit our Help Center</p>
                  </li>
                  <li>
                    <a href="#!" className="text-secondary">
                      <h6>
                        <BsGearFill /> Manage your account in privacy
                      </h6>
                    </a>
                    <p className="text-secondary">Go to your Settings</p>
                  </li>
                </ul>
              </div>
              <hr className="clearfix w-100 d-md-none" />
              {/* Grid column */}
              <div className="col-md-3 mx-auto">
                {/* Links */}

                <ul className="list-unstyled">
                  <li>
                    <label for="cars" className="text-secondary">
                      Select Language
                    </label>
                    <select
                      style={{ width: "18rem" }}
                      class="form-control"
                      name="cars"
                      id="cars"
                    >
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
          <div className="footer-copyright text-start ml-3 py-3 text-secondary">
            LinkedIn Corporation © 2022
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </Container>
    );
  }
}

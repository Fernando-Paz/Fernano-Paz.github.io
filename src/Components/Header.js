import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const resumeDownload = this.props.data.resumeDownload;
    const name = this.props.data.name;
    const namesecond = this.props.data.namesecond;
    const description = this.props.data.description;
    const description1 = this.props.data.description1;
    const description2 = this.props.data.description2;
    const description3 = this.props.data.description3;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#certi">
                Certifications
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Experience
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#eventos">
                Events
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
              <h1 className="responsive-headline">{namesecond}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}</h3>
              <h3>{description1}</h3>
              <h3>{description2}</h3>
              <h3>{description3}</h3>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;

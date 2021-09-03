import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const namesecond = this.props.data.namesecond;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const bio2 = this.props.data.bio2;
    const bio3 = this.props.data.bio3;
    const bio4 = this.props.data.bio4;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const email2 = this.props.data.email2;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            {/* <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div> */}
            <div className="nine columns main-col">
              <h2>You can tell me Paz</h2>
              <p>{bio}<br></br>{bio2}<br></br>{bio3}<br></br>{bio4}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name} {namesecond}</span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                    <br />
                    <span>{email2}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i> Resume
                    </a>
                  </p>
                </div>
              </div>
              <div className="columns download">
                <p></p>
              </div>
              <div className="columns download">
                <p></p>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;

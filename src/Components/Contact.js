import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const namesecond = this.props.data.namesecond;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const message = this.props.data.contactmessage;
    const message1 = this.props.data.contactmessage1;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>-</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{message}</p>
              <p className="lead">{message1}</p>
              <div className="widget widget_contact">
                <h4>Phone</h4>
                <p className="address">
                  <span>{name} {namesecond}</span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
            </div>
            
          </div>
        </Fade>

        
      </section>
    );
  }
}

export default Contact;

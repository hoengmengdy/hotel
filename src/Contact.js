import React from 'react';

function Contact() {
  return (
<>
  {/* end header */}
  <div className="back_re">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="title">
            <h2>Contact Us</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*  contact */}
  <div className="contact">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form id="request" className="main_form">
            <div className="row">
              <div className="col-md-12 ">
                <input
                  className="contactus"
                  placeholder="Name"
                  type="type"
                  name="Name"
                />
              </div>
              <div className="col-md-12">
                <input
                  className="contactus"
                  placeholder="Email"
                  type="type"
                  name="Email"
                />
              </div>
              <div className="col-md-12">
                <input
                  className="contactus"
                  placeholder="Phone Number"
                  type="type"
                  name="Phone Number"
                />
              </div>
              <div className="col-md-12">
                <textarea
                  className="textarea"
                  placeholder="Message"
                  type="type"
                  message="Name"
                  defaultValue={"Message"}
                />
              </div>
              <div className="col-md-12">
                <button className="send_btn">Send</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div className="map_main">
            <div className="map-responsive">
             <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d244.30246404822418!2d104.89322404217273!3d11.563366591260328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1skm!2skh!4v1765016118038!5m2!1skm!2skh" 
                width={600}
                height={400}
                frameBorder={0}
                style={{ border: 0, width: "100%" }}
                allowFullScreen=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end contact */}
</>



  );
}
export default Contact;
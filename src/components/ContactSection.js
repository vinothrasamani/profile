import {
  Mail,
  MapPin,
  Phone
} from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';

function ContactSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <h2 className="text-center gradient-text fw-bold mb-5 display-4">
          Get In Touch
        </h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card-custom p-5">
              <p className="text-center fs-5 text-white-50 mb-5">
                I'm currently learning Python for backend and AI integration.
                Feel free to reach out for collaboration or opportunities!
              </p>
              <div className="row g-4">
                <div className="col-md-4">
                  <a
                    href="mailto:vinothrasamani@gmail.com"
                    className="contact-card"
                  >
                    <Mail
                      className="text-cyan d-block mx-auto mb-3"
                      size={40}
                    />
                    <h5 className="fw-semibold text-center">Email</h5>
                    <p className="small text-white-50 text-center mb-0 text-break">
                      vinothrasamani@gmail.com
                    </p>
                  </a>
                </div>
                <div className="col-md-4">
                  <a href="tel:+916383161574" className="contact-card">
                    <Phone
                      className="text-cyan d-block mx-auto mb-3"
                      size={40}
                    />
                    <h5 className="fw-semibold text-center">Phone</h5>
                    <p className="small text-white-50 text-center mb-0">
                      +91 6383161574
                    </p>
                  </a>
                </div>
                <div className="col-md-4">
                  <a target='_blank' href='https://www.google.com/maps/place/Jessi+Software/@9.9505942,78.1237921,16.04z/data=!4m6!3m5!1s0x3b00c5032a757efd:0x52881712a37ca9cd!8m2!3d9.9507547!4d78.1288616!16s%2Fg%2F11j8kznw31?entry=ttu&g_ep=EgoyMDI1MTEwMi4wIKXMDSoASAFQAw%3D%3D' className="contact-card">
                    <MapPin
                      className="text-cyan d-block mx-auto mb-3"
                      size={40}
                    />
                    <h5 className="fw-semibold text-center">Location</h5>
                    <p className="small text-white-50 text-center mb-0">
                     Natham, Dindigul, Tamil Nadu
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactSection;
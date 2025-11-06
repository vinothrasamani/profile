
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';
import {
  Mail,
  Github,
  Linkedin
} from 'lucide-react';
function HeroSection() {
  return (
    <section id="home" className="min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <h1 className="hero-title gradient-text fw-bold mb-4">
              Vinoth Andimeiyan
            </h1>
            <p className="fs-3 mb-3 text-cyan">
             FullStack Mobile App Developer
            </p>
            <p
              className="fs-5 text-white-50 mb-5 mx-auto"
              style={{ maxWidth: 700 }}
            >
              Passionate developer with 1 year of experience building scalable
              mobile applications and robust backend solutions
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
              <a href="#contact" className="btn btn-gradient">
                Get In Touch
              </a>
              <a href="#projects" className="btn btn-outline-gradient">
                View Projects
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <a href='mailto:vinothrasamani@gmail.com'><Mail className="social-icon" size={28} /></a>
              <a href='https://github.com/vinothrasamani/' target='_blank'><Github className="social-icon" size={28} /></a>
              <a href='https://www.linkedin.com/in/vinoth-a-629b13285/' target='_blank'><Linkedin className="social-icon" size={28} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
import {
  Smartphone,
  Server,
  Code,
} from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';

function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <h2 className="text-center gradient-text fw-bold mb-5 display-4">
          About Me
        </h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card-custom p-5">
              <p className="fs-5 text-white-50 mb-4">
                I'm a passionate Mobile App Developer specializing in Flutter
                and Laravel backend development. With 1 year of professional
                experience, I've successfully built and deployed multiple
                scalable mobile applications with clean architecture and
                responsive UI/UX.
              </p>
              <p className="fs-5 text-white-50 mb-5">
                My expertise lies in creating seamless frontend-backend
                integrations, implementing real-time features using Firebase and
                WebSockets, and managing complex state using Riverpod and GetX.
                I've published apps on Google Play Store and hosted multiple
                websites on Bluehost and DigitalOcean.
              </p>
              <div className="row g-4 mt-4">
                <div className="col-md-4">
                  <div className="icon-box">
                    <Smartphone className="text-cyan mb-3" size={40} />
                    <h5 className="fw-semibold">2+ Apps Published</h5>
                    <p className="text-white-50 small mb-0">
                      Google Play Store
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="icon-box">
                    <Server className="text-cyan mb-3" size={40} />
                    <h5 className="fw-semibold">3 Websites Hosted</h5>
                    <p className="text-white-50 small mb-0">On Bluehost</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="icon-box">
                    <Code className="text-cyan mb-3" size={40} />
                    <h5 className="fw-semibold">1 Year Experience</h5>
                    <p className="text-white-50 small mb-0">
                      Professional Development
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutSection;
import {
  MapPin,
} from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';

function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <h2 className="text-center gradient-text fw-bold mb-5 display-4">
          Professional Experience
        </h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card-custom p-5">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-4">
                <div>
                  <h3 className="fs-3 fw-semibold text-cyan">
                    Mobile App Developer
                  </h3>
                  <p className="fs-5 mb-2">Jessi Software Pvt Ltd</p>
                  <p className="text-white-50 d-flex align-items-center gap-2">
                    <MapPin width={18} height={18} /> Madurai, India
                  </p>
                </div>
                <span className="badge-custom mt-3 mt-md-0">
                  October 2024 – Present
                </span>
              </div>

              <ul className="list-unstyled mt-4">
                {[
                  'Developed and maintained multiple Flutter applications with clean architecture and responsive UI',
                  'Integrated REST APIs built in Laravel, ensuring seamless backend communication',
                  'Implemented authentication, push notifications, and background services',
                  'Created chat applications with real-time updates using Laravel WebSockets and Pusher',
                  'Integrated payment systems like Razorpay (split payments, routes, and UPI)',
                  'Deployed applications to Google Play Console and hosted backends on Bluehost',
                  'Worked on PDF generation, Google Maps, Multi-language support and audio/video features',
                ].map((exp, idx) => (
                  <li className="mb-3 d-flex gap-3" key={idx}>
                    <span className="text-cyan">•</span>
                    <span className="text-white-50">{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ExperienceSection;
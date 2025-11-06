import {
  Smartphone,
  Server,
  Cloud,
  Globe,
  Code,
} from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';

function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-dark-section">
      <div className="container">
        <h2 className="text-center gradient-text fw-bold mb-5 display-4">
          Technical Skills
        </h2>
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card-custom p-4 h-100">
              <h3 className="fs-4 fw-semibold mb-4 d-flex align-items-center gap-2 text-cyan">
                <Smartphone size={28} /> Mobile Development
              </h3>
              <div className="d-flex flex-wrap">
                {[
                  'Flutter',
                  'Dart',
                  'Riverpod',
                  'GetX','BLoc',
                  'Firebase','React Native',
                  'REST API Integration','Kotlin',
                  'State Management','Java',
                  'Background Services',
                  'Push Notifications',
                  'File & Media Handling',
                ].map((skill) => (
                  <span className="badge-custom badge-mobile" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-custom p-4 h-100">
              <h3 className="fs-4 fw-semibold mb-4 d-flex align-items-center gap-2 text-cyan">
                <Server size={28} /> Backend Development
              </h3>
              <div className="d-flex flex-wrap">
                {[
                  'Laravel (PHP)',
                  'MySQL',
                  'API Creation',
                  'WebSockets','Flask',
                  'File Storage',
                  'Payment Gateway Integration',
                ].map((skill) => (
                  <span className="badge-custom badge-backend" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-custom p-4 h-100">
              <h3 className="fs-4 fw-semibold mb-4 d-flex align-items-center gap-2 text-cyan">
                <Cloud size={28} /> Deployment & Cloud
              </h3>
              <div className="d-flex flex-wrap">
                {['Google Play Console', 'Bluehost', 'DigitalOcean', 'CDN - GCore'].map((val)=>
                <span className="badge-custom badge-deployment">{val}</span>)}                
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-custom p-4 h-100">
              <h3 className="fs-4 fw-semibold mb-4 d-flex align-items-center gap-2 text-cyan">
                <Globe size={28} /> Web Development
              </h3>
              <div className="d-flex flex-wrap">
                {['HTML', 'CSS', 'BootStrap', 'JavaScript', 'React', 'Laravel'].map((val)=>
                <span className="badge-custom badge-web">{val}</span>)}                
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-custom p-4 h-100">
              <h3 className="fs-4 fw-semibold mb-4 d-flex align-items-center gap-2 text-cyan">
                <Code size={28} /> Tools & Others
              </h3>
              <div className="d-flex flex-wrap">
                {[
                  'Git',
                  'Postman',
                  'VS Code',
                  'Android Studio',
                  'XAMPP',
                  'API Testing',
                  'MVC & MVVM Pattern',
                ].map((skill) => (
                  <span className="badge-custom badge-tools" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SkillsSection;

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';

function ProjectsSection({ onClick , isOpen}) {
  const PROJECTS = [
    {
      title: 'Attendance Management System',
      desc: 'Built with Flutter frontend and Laravel + MySQL backend. Integrated REST APIs for staff check-in and check-out tracking with Calendar-based UI.',
      techs: ['Flutter', 'Laravel', 'MySQL', 'REST API'],
      features: [
        'Daily and monthly attendance tracking',
        'Local server deployment for data privacy',
        'Auto-connects to school Wi-Fi network',
      ],
    },
    {
      title: 'Publication Order & Tracking System',
      desc: 'Complete order management system allowing users to place orders, manage collections, and browse products.',
      techs: ['Flutter', 'Laravel', 'MySQL', 'GPS', 'Map', 'Kotlin', 'Firebase - Push Notification'],
      features: [
        'Order placement and management',
        'Statement downloads',
        'Location tracking for work status',
      ],
    },
    {
      title: 'Book Store App',
      desc: 'E-learning platform with synchronized audio and animated highlights for offline learning.',
      techs: ['Flutter', 'Laravel', 'MySQL', 'PDF', 'Audio'],
      features: [
        'PDF eBook downloads',
        'Synchronized audio with animated highlights',
        'Offline functionality',
        'Video and document attachments',
      ],
    },
    {
      title: 'School Payment & Parent-Admin App',
      desc: 'Dual-module application for school payment management with separate interfaces for admins and parents.',
      techs: ['Flutter', 'Laravel', 'MySQL', 'Razorpay'],
      features: [
        'Admin dashboard and control panel',
        'Parent portal with fee payment',
        'Real-time notifications and chat',
        'Receipt generation and download',
      ],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-dark-section">
      <div className="container">     
        <h2 className="text-center gradient-text fw-bold mb-5 display-4 d-flex justify-content-center align-items-center gap-2">
          Featured Projects
        </h2>
        <div className="row g-4">
          {PROJECTS.slice(0, isOpen ? PROJECTS.length : 4).map((proj, i) => (
            <div className="col-lg-6" key={proj.title}>
              <div className="card-custom p-4 h-100">
                <h3 className="fs-4 fw-semibold mb-3 text-cyan">
                  {proj.title}
                </h3>
                <p className="text-white-50 mb-4">{proj.desc}</p>
                <div className="mb-4">
                  <p className="small fw-semibold text-white-50 mb-2">
                    Technologies:
                  </p>
                  <div className="d-flex flex-wrap">
                    {proj.techs.map((tech) => (
                      <span className="badge-custom badge-mobile" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="small fw-semibold text-white-50 mb-2">
                    Key Features:
                  </p>
                  <ul className="list-unstyled">
                    {proj.features.map((feat) => (
                      <li className="small text-white-50 mb-2" key={feat}>
                        <span className="text-cyan">✓</span> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <br/>
        { !isOpen && (<button
          className="btn see-more-bs d-inline-flex align-items-center"
          onClick={() => onClick("projects") }
          aria-label="See More"
        >
          <span>See More</span>
          <svg
            className="ms-2 arrow-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 12h14M13 5l6 7-6 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>)}
      </div>
    </section>
  );
}
export default ProjectsSection;
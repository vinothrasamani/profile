
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';

const SECTIONS = [
  { name: 'Home', ref: 'homeRef' },
  { name: 'About', ref: 'aboutRef' },
  { name: 'Skills', ref: 'skillsRef' },
  { name: 'Experience', ref: 'experienceRef' },
  { name: 'Projects', ref: 'projectsRef' },
  { name: 'Contact', ref: 'contactRef' },
];

function Navbar({ activeIndex, onNavClick }) {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top navbar-custom"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand gradient-text fw-bold fs-3" href="#home">
          Vinoth.A
        </a>
        <button
          className="navbar-toggler border-0 text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span>&#9776;</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {SECTIONS.map((section, i) => (
              <li className="nav-item" key={section.name}>
                <a
                  className={`nav-link${i === activeIndex ? ' active' : ''}`}
                  href={`#${section.name.toLowerCase()}`}
                  onClick={(e) => onNavClick(e, i)}
                >
                  {section.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
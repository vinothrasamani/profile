import * as React from "react";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';
import profile from '../assets/profile.png'
import { ArrowLeft, Pointer } from "lucide-react";

const SECTIONS = [
  { name: 'Home', ref: 'homeRef' },
  { name: 'About', ref: 'aboutRef' },
  { name: 'Skills', ref: 'skillsRef' },
  { name: 'Experience', ref: 'experienceRef' },
  { name: 'Projects', ref: 'projectsRef' },
  { name: 'Contact', ref: 'contactRef' },
];

function Navbar({ activeIndex, onNavClick , isOpened, close}) {
  const [open, setOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const image = <div>
    <img src={profile} width={35} height={35} className='img' alt="Profile" onClick={() => setOpen(true)}/>
    <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md">
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        ✨Vinoth.A
        <IconButton onClick={() => setOpen(false)} style={{height:30, width:30}}>
          &times;
        </IconButton>
      </DialogTitle>
      <hr/>
      <DialogContent>
        <img src={profile} alt="Profile" className="profile-img"/>
      </DialogContent>
    </Dialog>
  </div>;

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top navbar-custom"
      id="mainNav"
    >
      <div className="container">
        {isOpened ? (<ArrowLeft onClick={close} style={{cursor:Pointer,}}/>) : (image)}
        <a className="navbar-brand gradient-text fw-bold fs-3" href="#home">
          Vinoth.A
        </a>
        {!isOpened && (<button
          className="navbar-toggler border-0 text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          onClick={toggleMenu}
        >
          {isOpen ? <span>&#128473;</span> : <span>&#9776;</span>}
        </button>)}
        {isOpened ? (image) : (<div className="collapse navbar-collapse" id="navbarNav">
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
        </div>)}
      </div>
    </nav>
  );
}

export default Navbar;
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';

function Footer() {
  return (
    <footer
      className="py-4"
      style={{
        background: 'rgba(15, 23, 42, 0.8)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <div className="container text-center">
        <p className="text-white-50 mb-2">
          © 2024 Vinoth.A, All rights reserved.
        </p>
        <p className="text-white-50 small mb-0">
          Empowering innovation through emerging technologies.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
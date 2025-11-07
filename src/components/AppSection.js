import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';
import { useState } from 'react';
import profile from '../assets/profile.png';
import CircularProgress from "@mui/material/CircularProgress";

const RESUME_URL = "https://dsfjk.apk";
const FILE_NAME = "vinoth_profile.apk";

function AppSection() {
  const [loading, setLoading] = useState(false);
  
  const handleDownload = async () => {
    try {
      setLoading(true);
      const res = await fetch(RESUME_URL, {
        method: "GET",
      });
      if (!res.ok) throw new Error(`Download failed: ${res.status}`);

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = FILE_NAME;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert("Failed to download APK. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="app-sec" className="sec-section-padding bg-dark-section">
      <div className="container">
        <div className="row g-4 align-items-center">            
          <div className="col-lg-1 col-auto">
            <div className="card-custom p-2">
                <img 
                  src={profile} 
                  alt="Profile" 
                  style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                />
            </div>
          </div>          
          <div className="col-lg-9 col" style={{minWidth:250}}>
              <br/>
              <h3>Profile Application</h3>
              <p className="fs-8 text-white-50 mb-4">Get my portfolio by download and install an apk from here!</p>
          </div>          
          <div className="col-lg-2 col-auto">
             {loading ? (<CircularProgress size={22} thickness={4} />) 
             : ( <button className="btn btn-gradient" onClick={handleDownload} disabled={loading}>
                  Install
               </button>)}
          </div>
        </div>
      </div>
    </section>
  );
}
export default AppSection;
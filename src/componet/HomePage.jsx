import React from 'react';

export default function Home() {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>

      {/* Transparent Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">MyModernSite</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fw-semibold">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero with Background Image and Overlay */}
      <section 
        className="d-flex align-items-center justify-content-center text-center text-white"
        style={{
          height: '90vh',
          backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <div style={{
          position: 'absolute',
          top:0, left:0, right:0, bottom:0,
          backgroundColor: 'rgba(0,0,0,0.6)'
        }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px' }}>
          <h1 className="display-3 fw-bold">Welcome to MyModernSite</h1>
          <p className="lead mb-4">Experience elegance and performance in every project.</p>
          <button className="btn btn-outline-light btn-lg px-5">Get Started</button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-4 fw-bold">About Us</h2>
          <p className="lead mx-auto" style={{ maxWidth: '700px', lineHeight: '1.7' }}>
            We are passionate developers crafting sleek, modern, and responsive websites to bring your ideas to life.
          </p>
        </div>
      </section>

      {/* Features Section with Cards */}
      <section className="py-5">
  <div className="container">
    <h2 className="text-center mb-5 fw-bold">Features</h2>
    <div className="row g-4">
      {[1, 2, 3].map((num) => {
        const titles = ['Fast Performance', 'Fully Responsive', 'Secure'];
        const descriptions = [
          'Our websites load lightning fast on all devices, delivering the best user experience.',
          'Optimized for mobile, tablet, and desktop – your site looks perfect everywhere.',
          'Security is our priority – we implement best practices to keep your data safe.',
        ];
        // Unsplash से nature images random से ले रहे हैं (size 400x250)
        const imageUrls = [
          'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
          'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=400&q=80',
          'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=400&q=80',
        ];

        return (
          <div className="col-md-4" key={num}>
            <div className="card shadow-sm h-100 border-0">
              <img
                src={imageUrls[num - 1]}
                className="card-img-top"
                alt={titles[num - 1]}
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{titles[num - 1]}</h5>
                <p className="card-text text-muted">{descriptions[num - 1]}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* Contact Form Section */}
      <section className="py-5 bg-light">
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 className="text-center mb-4 fw-bold">Contact Us</h2>
          <form>
            <div className="mb-3">
              <input type="text" className="form-control form-control-lg" placeholder="Your Name" required />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control form-control-lg" placeholder="Your Email" required />
            </div>
            <div className="mb-3">
              <textarea className="form-control form-control-lg" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-lg w-100">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">&copy; {new Date().getFullYear()} MyModernSite. All rights reserved.</p>
      </footer>
    </div>
  );
}

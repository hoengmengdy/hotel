import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Room from './Room';
import Gallery from './Gallery';
import Blog from './Blog';
import Contact from './Contact';

function App() {
  return (
   <>
  {/* header */}
  <header>
    {/* header inner */}
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
            <div className="full">
              <div className="center-desk">
                <div className="logo">
                  <a href="/">
                   <img 
                    src="images/kk.jpg" 
                    alt="KK Logo" 
                    style={{ width: '50px', height: '50px' }} 
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
            <nav className="navigation navbar navbar-expand-md navbar-dark ">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarsExample04"
                aria-controls="navbarsExample04"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarsExample04">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="About">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="room">
                      Our room
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="gallery">
                      Gallery
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="blog">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* end header inner */}
  {/* end header */}



      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/room" element={<Room />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

  {/*  footer */}
  <footer>
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className=" col-md-4">
            <h3>Contact US</h3>
            <ul className="conta">
              <li>
                <i className="fa fa-map-marker" aria-hidden="true" /> Address
              </li>
              <li>
                <i className="fa fa-mobile" aria-hidden="true" /> +855 15-663-024
              </li>
              <li>
                {" "}
                <i className="fa fa-envelope" aria-hidden="true" />
                <a href="#"> hoengmengdy.biu@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Menu Link</h3>
            <ul className="link_menu">
              <li className="">
                <a href="/">Home</a>
              </li>
              <li>
                <a href="about"> about</a>
              </li>
              <li>
                <a href="room">Our Room</a>
              </li>
              <li>
                <a href="gallery">Gallery</a>
              </li>
              <li>
                <a href="blog">Blog</a>
              </li>
              <li>
                <a href="contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>News letter</h3>
            <form className="bottom_form">
              <input
                className="enter"
                placeholder="Enter your email"
                type="text"
                name="Enter your email"
              />
              <button className="sub_btn">subscribe</button>
            </form>
            <ul className="social_icon">
              <li>
                <a href="http://facebook.com/mengdy.168">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-youtube-play" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <p>
                © 2025{" "}
                <a href=""> Booking Now</a>
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* end footer */}
</>

  );
}

export default App;

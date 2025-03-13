const Footer = () => {
  return (
    <div data-bs-theme="dark" className="card">
      <h3 className="card-header">Oganiru Na Odinma</h3>
      <br />
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card-title">
            <div className="card-body">
              <h5 className="card-title">About Us</h5>
              <p className="card-text">
                Nkalaha is a tapestry of traditions, stories, and customs that
                have been passed down through generations. We aim to keep these
                traditions alive through various initiatives, including cultural
                events, storytelling sessions, and traditional arts and crafts
                workshops. By engaging both the young and the old, we strive to
                instill a sense of pride in our identity and encourage the
                continuation of our customs. In addition to our cultural
                pursuits, Oganiru na Odinma Nkalaha is dedicated to uplifting
                the less fortunate within our community. We believe in the power
                of collective effort and compassion. Through outreach programs,
                we provide support to those in need, helping to alleviate
                poverty and improve living conditions.
              </p>
              <a href="#" className="btn btn-primary">
                Join us
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card-title">
            <h5 style={{ paddingLeft: "10px" }} className="card-title">
              Useful Links
            </h5>
            <br />
            <ul>
              <li>
              <a className="nav-link active" href="/">Home</a>
              </li>
              <li>
              <a className="nav-link active" href="/About">About</a>
              </li>
              {/* <li>
                <a href="#">Contact</a>
              </li> */}
              <li>
              <a className="nav-link active" href="/Blogs">Blogs</a>
              </li>
              
              <br />
              <a href="#" className="btn btn-primary">
                Login
              </a>
            </ul>
            <br />
            <p style={{ paddingLeft: "10px" }} className="card-text">
              Contact us on 08011221122 (Whatsapp Only) Email:
              divuieed@gmail.com
            
            <div>
            <button type="button" className="btn btn-outline-primary">
              facebook
            </button>
            <button type="button" className="btn btn-outline-secondary">
              Instagram
            </button>
            <button type="button" className="btn btn-outline-success">
              Whatsapp
            </button>
            <button type="button" className="btn btn-outline-danger">
              Tiktok
            </button>
            </div>
            </p>
            {/* <button type="button" className="btn btn-outline-warning">Warning</button>
        <button type="button" className="btn btn-outline-info">Info</button>
        <button type="button" className="btn btn-outline-light">Light</button>
        <button type="button" className="btn btn-outline-dark">Dark</button> */}

            <p style={{ paddingLeft: "10px" }} className="card-text">
              All rights reserved. Powered by DS Nation - for a better web
            </p>
          </div>
        </div>
      </div>
      <br />
    </div>

    // </div>
  );
};

export default Footer;

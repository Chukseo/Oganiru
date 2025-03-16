const Banner = () => {
  return (
    <div className="card text-center">
      <div className="card-header">Featured</div>
      <div className="card-body">
        <img
          src="/public/assets/images/logo.png"
          alt="logo"
          width="301px"
          height="267px"
        ></img>
        <h5 className="card-title">Our Mission Statement</h5>
        <p className="card-text">
          Oganiru na Odinma Nkalaha is a community-driven platform dedicated to
          uplifting and showcasing the beauty of our village. Our mission is to
          create a vibrant online presence that highlights our rich history,
          cultural heritage, and the resilience of our people.
        </p>
        <a href="/About" className="btn btn-primary">
          About Us
        </a>
      </div>
      <br />
      <div className="card-footer text-body-secondary">Recents posts</div>
    </div>
  );
};

export default Banner;

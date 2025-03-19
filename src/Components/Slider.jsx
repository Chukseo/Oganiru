const Slider = () => {
  return (
    <div id="carouselExampleCaptions, carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/assets/images/slide1.jpg"
            className="d-block w-100"
            alt="..."
          ></img>
          <div className="carousel-caption d-none d-md-block">
            <h5>Promoting the Culture</h5>
            <p>actively celebrating, preserving, and sharing cultural heritage through various means, including education, events, and community engagement, ultimately fostering understanding and appreciation.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/assets/images/slide2.jpg"
            className="d-block w-100"
            alt="..."
          ></img>
          <div className="carousel-caption d-none d-md-block">
            <h5>Showcasing our cultural heritage</h5>
            <p>We respect and preserve traditions through cultural celebrations. Through the naming of our children. Through the honoring of our ancestors...</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/assets/images/slide3.jpg"
            className="d-block w-100"
            alt="..."
          ></img>
          <div className="carousel-caption d-none d-md-block">
            <h5>Preserving our cultural heritage</h5>
            <p>safeguarding traditions, languages, and knowledge systems, including tangible assets like monuments and artifacts, through documentation, education, community involvement, and legal protection, ensuring continuity for future generations.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;

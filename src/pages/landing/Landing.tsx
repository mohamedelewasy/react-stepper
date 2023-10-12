import { Link } from "react-router-dom";
import { MapComponent } from "../../components/Map";

export const Landing = () => {
  return (
    <>
      {/* <!-- Header Start --> */}
      <div className="container-fluid bg-light my-6 mt-0" id="home">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 py-6 pb-0 pt-lg-0">
              <Link
                to={"/register"}
                className="service-provider-btn btn btn-primary py-3 px-4 me-5"
              >
                Register As Service Provider
              </Link>
              <h3 className="text-primary mb-3">Follow me</h3>
              <h1 className="display-3 mb-3">We are momies app</h1>
              <h2 className="typed-text-output d-inline"></h2>
              <div className="typed-text d-none">
                Try the momies app with us, Accomplishing tasks, Comfort and
                safety, momies trust them
              </div>
              <div className="d-flex align-items-center pt-5">
                <a href="" className="btn btn-primary py-3 px-4 me-5">
                  Download App
                </a>
                <button
                  type="button"
                  className="btn-play"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/watch?v=MxTDYgUJv6g&t=3s"
                  data-bs-target="#videoModal"
                >
                  <span></span>
                </button>
                <h5 className="ms-4 mb-0 d-none d-sm-block">Play Video</h5>
              </div>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid" src="img/profile.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}

      {/* <!-- Contact Start --> */}
      <div className="container-xxl pb-5" id="contact">
        <div className="container py-5">
          <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-6">
              <h1 className="display-5 mb-0">Let's Work Together</h1>
            </div>
            <div className="col-lg-6 text-lg-end">
              <a className="btn btn-primary py-3 px-5" href="">
                Say Hello
              </a>
            </div>
          </div>
          <div className="row g-5">
            <div
              className="col-lg-5 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <p className="mb-2">My office:</p>
              <h3 className="fw-bold">123 Street, New York, USA</h3>
              <hr className="w-100" />
              <p className="mb-2">Call me:</p>
              <h3 className="fw-bold">+012 345 6789</h3>
              <hr className="w-100" />
              <p className="mb-2">Mail me:</p>
              <h3 className="fw-bold">info@example.com</h3>
              <hr className="w-100" />
              <p className="mb-2">Follow me:</p>
              <div className="d-flex pt-2">
                <a className="btn btn-square btn-primary me-2" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-square btn-primary me-2" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-square btn-primary me-2" href="">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-square btn-primary me-2" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div
              className="col-lg-7 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <p className="mb-4">
                The contact form is currently inactive. Get a functional and
                working contact form with Ajax & PHP in a few minutes. Just copy
                and paste the files, add a little code and you're done.{" "}
                <a href="https://momies.net">Download App</a>.
              </p>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "100px" }}
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary py-3 px-5" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}

      {/* <!-- Copyright Start --> */}
      <div className="container-fluid bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a className="border-bottom text-secondary" href="#">
                MOMIES
              </a>
              , All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By{" "}
              <a
                className="border-bottom text-secondary"
                href="https://www.vzadi.com"
              >
                VZADI
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

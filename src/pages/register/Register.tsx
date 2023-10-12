import { useState } from "react";
import { EmailComponent } from "../../components/Email";
import { ValidationCodeComponent } from "../../components/VaidationCode";
import { PersonalDetailsComponents } from "../../components/PersonalDetail";
import { DocsComponent } from "../../components/Docs";
import bg from "../../assets/bg.jpg";
import { MapComponent } from "../../components/Map";
import { StepsBarComponent } from "../../components/step-bar/StepsBar";
import "../../assets/style.css";

export const Register = () => {
  interface Idata {
    email: string;
    name: string;
    phoneNumber1: string;
    phoneNumber2: string;
    facilityName: string;
    facilityType: string;
    domain: string;
    category: string;
    address: string;
    location: {
      longitude: string;
      latitude: string;
    };
    logo: File[];
    coverPage: File[];
    commercialRegistrationNumber: File[];
    taxRegistrationNumber: File[];
  }
  const [steps, setSteps] = useState(0);
  const [data, setData] = useState<Partial<Idata>>();
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  }>({ latitude: 30.048723157849253, longitude: 31.23486207349697 });

  return (
    <>
      <div className="container-xxl pb-5" id="contact">
        <div className="container py-5">
          <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-6">
              <h1 className="display-5 mb-0">Let's Work Together</h1>
            </div>
          </div>
          <div className="row g-5">
            <div
              className="col-lg-5 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
              // style={{ maxHeight: "600px" }}
            >
              {steps === 2 ? (
                <MapComponent setLocation={setLocation} />
              ) : (
                <img
                  src={bg}
                  alt="img"
                  style={{ overflow: "hidden", height: "100%", width: "100%" }}
                />
              )}
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
              </p>{" "}
              <StepsBarComponent steps={steps} />
              <div className="registeration">
                {steps === 0 && (
                  <EmailComponent
                    steps={steps}
                    setSteps={setSteps}
                    setData={setData}
                  />
                )}
                {steps === 1 && (
                  <ValidationCodeComponent steps={steps} setSteps={setSteps} />
                )}
                {steps === 2 && (
                  <PersonalDetailsComponents
                    steps={steps}
                    setSteps={setSteps}
                    data={data}
                    setData={setData}
                    location={location}
                  />
                )}
                {steps === 3 && (
                  <DocsComponent
                    steps={steps}
                    setSteps={setSteps}
                    data={data}
                    setData={setData}
                  />
                )}
                {steps === 4 && (
                  <div className="success-con">
                    <i className="fa-solid fa-check"></i>
                    <p>
                      Please wait until our customer services check your data
                    </p>
                  </div>
                )}
              </div>{" "}
            </div>
          </div>
        </div>
      </div>

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

import { useState } from "react";
import { useForm } from "react-hook-form";
import validator from "validator";

interface Iprop {
  steps: number;
  setSteps: React.Dispatch<React.SetStateAction<number>>;
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
  location: { latitude: number; longitude: number };
}

export const PersonalDetailsComponents = (props: Iprop) => {
  interface Iform {
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
  }

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Iform>({
    mode: "onSubmit",
  });

  const submit = () => {
    props.setData({ ...props.data, ...getValues() });
    props.setSteps(3);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)} noValidate>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="text"
                id="name"
                placeholder="your Name*"
                className="form-control"
                {...register("name", {
                  required: "name is requried",
                  minLength: {
                    value: 3,
                    message: "name must be at least 3 characters",
                  },
                })}
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
              <label htmlFor="name">Name*</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="text"
                id="domain"
                className="form-control"
                placeholder="Your Email"
                {...register("domain", {
                  validate: {
                    isDomain: (val) =>
                      val.length > 0
                        ? validator.isURL(val, { require_protocol: true })
                          ? true
                          : "invalid domain"
                        : true,
                  },
                })}
              />
              {errors.domain && (
                <small className="text-danger">{errors.domain.message}</small>
              )}
              <label htmlFor="domain">Domain</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="number"
                id="phoneNumber1"
                className="form-control"
                placeholder="Your phone"
                {...register("phoneNumber1", {
                  required: "phone number is requried",
                  minLength: {
                    value: 11,
                    message: "invalid phone number",
                  },
                  maxLength: {
                    value: 11,
                    message: "invalid phone number",
                  },
                  validate: {
                    start: (val) =>
                      val.startsWith("010") ||
                      val.startsWith("011") ||
                      val.startsWith("012") ||
                      val.startsWith("015")
                        ? true
                        : "invalid phone number",
                  },
                })}
              />
              {errors.phoneNumber1 && (
                <small className="text-danger">
                  {errors.phoneNumber1.message}
                </small>
              )}
              <label htmlFor="phoneNumber1">Phone Number 1*</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="number"
                id="phoneNumber2"
                className="form-control"
                placeholder="Your Email"
                {...register("phoneNumber2", {
                  minLength: {
                    value: 11,
                    message: "invalid phone number",
                  },
                  maxLength: {
                    value: 11,
                    message: "invalid phone number",
                  },
                  validate: {
                    start: (val) =>
                      val.length > 0
                        ? val.startsWith("010") ||
                          val.startsWith("011") ||
                          val.startsWith("012") ||
                          val.startsWith("015")
                          ? true
                          : "invalid phone number"
                        : true,
                  },
                })}
              />
              {errors.phoneNumber2 && (
                <small className="text-danger">
                  {errors.phoneNumber2.message}
                </small>
              )}
              <label htmlFor="phoneNumber2">Phone Number 2</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="text"
                id="facilityName"
                className="form-control"
                placeholder="Your Email"
                {...register("facilityName", {
                  required: "facilityName is requried",
                  minLength: {
                    value: 3,
                    message: "facility name must be at least 3 characters",
                  },
                })}
              />
              {errors.facilityName && (
                <small className="text-danger">
                  {errors.facilityName.message}
                </small>
              )}
              <label htmlFor="facilityName">Facility Name*</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="text"
                id="facilityType"
                className="form-control"
                placeholder="Your Email"
                {...register("facilityType", {
                  required: "facilityType is requried",
                  minLength: {
                    value: 3,
                    message: "facility type must be at least 3 characters",
                  },
                })}
              />
              {errors.facilityType && (
                <small className="text-danger">
                  {errors.facilityType.message}
                </small>
              )}
              <label htmlFor="facilityType">Facility Type*</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <select
                id="category"
                className="form-select"
                placeholder="Your Email"
                {...register("category", {
                  required: "category is requried",
                })}
              >
                <option value="opt1">opt1</option>
                <option value="opt2">opt2</option>
                <option value="opt3">opt3</option>
              </select>
              {errors.category && (
                <small className="text-danger">{errors.category.message}</small>
              )}
              <label htmlFor="category">Category*</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="text"
                id="address"
                className="form-control"
                placeholder="Your Email"
                {...register("address", {
                  required: "address is requried",
                })}
              />
              {errors.address && (
                <small className="text-danger">{errors.address.message}</small>
              )}
              <label htmlFor="address">Address*</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="number"
                id="latitude"
                className="form-control"
                placeholder="Your Email"
                value={props.location.latitude}
                {...register("location.latitude", {
                  required: "latitude is requried",
                  min: {
                    value: -90,
                    message: "latitude must be between -90 and +90",
                  },
                  max: {
                    value: 90,
                    message: "latitude must be between -90 and +90",
                  },
                })}
              />
              {errors.location?.latitude && (
                <small className="text-danger">
                  {errors.location.latitude.message}
                </small>
              )}
              <label htmlFor="latitude">Latitude*</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="number"
                id="longitude"
                className="form-control"
                placeholder="Your Email"
                value={props.location.longitude}
                {...register("location.longitude", {
                  required: "longitude is requried",
                  min: {
                    value: -180,
                    message: "longitude must be between -180 and +180",
                  },
                  max: {
                    value: 180,
                    message: "longitude must be between -180 and +180",
                  },
                })}
              />
              {errors.location?.longitude && (
                <small className="text-danger">
                  {errors.location.longitude.message}
                </small>
              )}
              <label htmlFor="longitude">Longitude*</label>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <button className="btn btn-primary py-3 px-5" type="submit">
              Next
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

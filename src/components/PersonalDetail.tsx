import { useForm } from "react-hook-form";
import validator from "validator";

interface Iprop {
  steps: number;
  setSteps: React.Dispatch<React.SetStateAction<number>>;
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
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
  } = useForm<Iform>({ mode: "onSubmit" });

  const submit = () => {
    props.setData({ ...props.data, ...getValues() });
    props.setSteps(3);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)} noValidate>
        <div className="form-control">
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "name is requried",
              minLength: {
                value: 3,
                message: "name must be at least 3 characters",
              },
            })}
          />
          {errors.name && <small>{errors.name.message}</small>}
        </div>
        <div className="form-control">
          <label htmlFor="phoneNumber1">Phone Number1*</label>
          <input
            type="number"
            id="phoneNumber1"
            {...register("phoneNumber1", {
              required: "phoneNumber1 is requried",
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
          {errors.phoneNumber1 && <small>{errors.phoneNumber1.message}</small>}
        </div>
        <div className="form-control">
          <label htmlFor="phoneNumber2">Phone Number2*</label>
          <input
            type="number"
            id="phoneNumber2"
            {...register("phoneNumber2", {
              required: "phoneNumber2 is requried",
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
          {errors.phoneNumber2 && <small>{errors.phoneNumber2.message}</small>}
        </div>
        <div className="form-control">
          <label htmlFor="facilityName">Facility Name*</label>
          <input
            type="text"
            id="facilityName"
            {...register("facilityName", {
              required: "facilityName is requried",
              minLength: {
                value: 3,
                message: "facility name must be at least 3 characters",
              },
            })}
          />
          {errors.facilityName && <small>{errors.facilityName.message}</small>}
        </div>
        <div className="form-control">
          <label htmlFor="facilityType">Facility Type*</label>
          <input
            type="text"
            id="facilityType"
            {...register("facilityType", {
              required: "facilityType is requried",
              minLength: {
                value: 3,
                message: "facility type must be at least 3 characters",
              },
            })}
          />
          {errors.facilityType && <small>{errors.facilityType.message}</small>}
        </div>
        <div className="form-control">
          <label htmlFor="domain">Domain*</label>
          <input
            type="text"
            id="domain"
            {...register("domain", {
              required: "domain is requried",
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
          {errors.domain && <small>{errors.domain.message}</small>}
        </div>
        <div className="form-control">
          <label htmlFor="category">Category*</label>
          <select
            id="category"
            {...register("category", {
              required: "category is requried",
            })}
            value="opt1"
          >
            <option value="opt1">opt1</option>
            <option value="opt2">opt2</option>
            <option value="opt3">opt3</option>
          </select>
          {errors.category && <small>{errors.category.message}</small>}
        </div>

        <div className="form-control">
          <label htmlFor="address">Address*</label>
          <input
            type="text"
            id="address"
            {...register("address", {
              required: "address is requried",
            })}
          />
          {errors.address && <small>{errors.address.message}</small>}
        </div>

        <div className="form-control">
          <label htmlFor="latitude">Latitude*</label>
          <input
            type="number"
            id="latitude"
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
            <small>{errors.location.latitude.message}</small>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="longitude">Longitude*</label>
          <input
            type="number"
            id="longitude"
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
            <small>{errors.location.longitude.message}</small>
          )}
        </div>

        <input type="submit" value="Next" />
      </form>
    </>
  );
};

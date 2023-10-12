import { useForm } from "react-hook-form";
import validator from "validator";

interface Iprop {
  steps: number;
  setSteps: React.Dispatch<React.SetStateAction<number>>;
  setData: React.Dispatch<React.SetStateAction<any>>;
}

export const EmailComponent = (props: Iprop) => {
  interface Iform {
    email: string;
  }
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Iform>({ mode: "onSubmit" });

  const submit = () => {
    props.setData(getValues());
    if (getValues().email === "eng.m.elewasy@gmail.com") props.setSteps(1);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)} noValidate>
        <div className="row g-3">
          <div className="col-md-12">
            <div className="form-floating">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Your Email"
                {...register("email", {
                  required: "email is requried",
                  validate: {
                    isEmail: (val) =>
                      validator.isEmail(val) ? true : "invalid email format",
                  },
                })}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
              <label htmlFor="email">Your Email</label>
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

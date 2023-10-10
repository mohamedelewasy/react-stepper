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
      <form onSubmit={handleSubmit(submit)} className="row g-3" noValidate>
        <div className="col-md-6">
          <div className="form-floating">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
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
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary py-3 px-5" type="submit">
            Next
          </button>
        </div>
      </form>
    </>
  );
};

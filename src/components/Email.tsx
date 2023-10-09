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
        <div className="form-field">
          <label htmlFor="email">Email*</label>
          <input
            type="text"
            id="email"
            {...register("email", {
              required: "email is requried",
              validate: {
                isEmail: (val) =>
                  validator.isEmail(val) ? true : "invalid email format",
              },
            })}
          />
          {errors.email && <small>{errors.email.message}</small>}
        </div>
        <div className="form-submit">
          <input type="submit" value="Next" />
        </div>
      </form>
    </>
  );
};

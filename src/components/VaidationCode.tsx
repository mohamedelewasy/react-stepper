import { useForm } from "react-hook-form";

interface Iprop {
  steps: number;
  setSteps: React.Dispatch<React.SetStateAction<number>>;
}

export const ValidationCodeComponent = (props: Iprop) => {
  interface Iform {
    verificationCode: string;
  }
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<Iform>({ mode: "onSubmit" });

  const submit = () => {
    if (getValues().verificationCode === "12345678") props.setSteps(2);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)} noValidate>
        <div className="row g-3">
          <div className="col-md-12">
            <p>Verification Code is Already sent to your email</p>
            <div className="form-floating">
              <input
                type="text"
                id="verificationCode"
                placeholder="Your Vrification Code"
                className="form-control"
                {...register("verificationCode", {
                  required: "verification code is required",
                  minLength: {
                    value: 8,
                    message: "verification code must be 8 characters",
                  },
                  maxLength: {
                    value: 8,
                    message: "verification code must be 8 characters",
                  },
                })}
              />
              {errors.verificationCode && (
                <small className="text-danger">
                  {errors.verificationCode.message}
                </small>
              )}
              <label htmlFor="verificationCode">Verification Code*</label>
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

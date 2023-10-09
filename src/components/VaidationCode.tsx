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
        <p>Verification Code is Already sent to your email</p>
        <label htmlFor="email">Verification Code*</label>
        <input
          type="text"
          id="email"
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
          <small>{errors.verificationCode.message}</small>
        )}
        <input type="submit" value="Next" disabled={!isValid} />
      </form>
    </>
  );
};

import { useForm } from "react-hook-form";

interface Iprop {
  steps: number;
  setSteps: React.Dispatch<React.SetStateAction<number>>;
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
}

export const DocsComponent = (props: Iprop) => {
  interface Iform {
    logo: File[];
    coverPage: File[];
    commercialRegistrationNumber: File[];
    taxRegistrationNumber: File[];
  }

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Iform>({ mode: "onSubmit" });

  const submit = () => {
    props.setData({ ...props.data, ...getValues() });
    props.setSteps(4);
  };
  return (
    <>
      <form onSubmit={handleSubmit(submit)} noValidate>
        <div className="form-control">
          <label htmlFor="logo">Logo*</label>
          <input
            type="file"
            id="logo"
            {...register("logo", {
              required: "logo is requried",
              validate: {
                countImages: (val: File[]) =>
                  val.length > 1 ? "images count exeeded" : true,
                imageSize: (val: File[]) => {
                  for (let i = 0; i < val.length; i++) {
                    if (!val[i].type.startsWith("image/"))
                      return `${val[i].name} must be an image`;
                    if (val[i].size > 1024 * 1024 * 1.7)
                      return `${val[i].name} must be at most 1.7MB`;
                  }
                  return true;
                },
              },
            })}
          />
          {errors.logo && <small>{errors.logo.message}</small>}
        </div>
        <div className="form-control">
          <label htmlFor="coverPage">Cover Page*</label>
          <input
            type="file"
            id="coverPage"
            {...register("coverPage", {
              required: "coverPage is requried",
              validate: {
                countImages: (val: File[]) =>
                  val.length > 1 ? "images count exeeded" : true,
                imageSize: (val: File[]) => {
                  for (let i = 0; i < val.length; i++) {
                    if (!val[i].type.startsWith("image/"))
                      return `${val[i].name} must be an image`;
                    if (val[i].size > 1024 * 1024 * 1.7)
                      return `${val[i].name} must be at most 1.7MB`;
                  }
                  return true;
                },
              },
            })}
          />
          {errors.coverPage && <small>{errors.coverPage.message}</small>}
        </div>
        <div className="form-control">
          <label htmlFor="commercialRegistrationNumber">
            Commercial Registration Number*
          </label>
          <input
            type="file"
            id="commercialRegistrationNumber"
            multiple
            {...register("commercialRegistrationNumber", {
              required: "commercial registration number is requried",
              validate: {
                countImages: (val: File[]) =>
                  val.length > 5 ? "images count exeeded" : true,
                imageSize: (val: File[]) => {
                  for (let i = 0; i < val.length; i++) {
                    if (!val[i].type.startsWith("image/"))
                      return `${val[i].name} must be an image`;
                    if (val[i].size > 1024 * 1024 * 1.7)
                      return `${val[i].name} must be at most 1.7MB`;
                  }
                  return true;
                },
              },
            })}
          />
          {errors.commercialRegistrationNumber && (
            <small>{errors.commercialRegistrationNumber.message}</small>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="taxRegistrationNumber">
            Tax Registration Number*
          </label>
          <input
            type="file"
            id="taxRegistrationNumber"
            multiple
            {...register("taxRegistrationNumber", {
              required: "tax registration number is requried",
              validate: {
                countImages: (val: File[]) =>
                  val.length > 5 ? "images count exeeded" : true,
                imageSize: (val: File[]) => {
                  for (let i = 0; i < val.length; i++) {
                    if (!val[i].type.startsWith("image/"))
                      return `${val[i].name} must be an image`;
                    if (val[i].size > 1024 * 1024 * 1.7)
                      return `${val[i].name} must be at most 1.7MB`;
                  }
                  return true;
                },
              },
            })}
          />
          {errors.taxRegistrationNumber && (
            <small>{errors.taxRegistrationNumber.message}</small>
          )}
        </div>
        <input type="submit" value="Next" />
      </form>
    </>
  );
};

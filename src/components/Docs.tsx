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
    verificationDocuments: File[];
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
        <div className="row g-3">
          <div className="col-md-12">
            <label htmlFor="logo" className="form-label">
              Logo*
            </label>
            <input
              type="file"
              id="logo"
              className="form-control"
              style={{ backgroundColor: "#fff" }}
              {...register("logo", {
                required: "logo is requried",
                validate: {
                  countImages: (val: File[]) =>
                    val.length > 1 ? "images count exeeded" : true,
                  imageSize: (val: File[]) => {
                    for (let i = 0; i < val.length; i++) {
                      if (!val[i].type.startsWith("image/"))
                        return `${val[i].name} must be an image`;
                      if (val[i].size > 1024 * 1024 * 5)
                        return `${val[i].name} must be at most 5MB`;
                    }
                    return true;
                  },
                },
              })}
            />
            {errors.logo && (
              <small className="text-danger">{errors.logo.message}</small>
            )}
          </div>
          <div className="col-md-12">
            <label htmlFor="coverPage" className="form-label">
              Cover Page*
            </label>
            <input
              type="file"
              id="coverPage"
              className="form-control"
              style={{ backgroundColor: "#fff" }}
              {...register("coverPage", {
                required: "coverPage is requried",
                validate: {
                  countImages: (val: File[]) =>
                    val.length > 1 ? "images count exeeded" : true,
                  imageSize: (val: File[]) => {
                    for (let i = 0; i < val.length; i++) {
                      if (!val[i].type.startsWith("image/"))
                        return `${val[i].name} must be an image`;
                      if (val[i].size > 1024 * 1024 * 5)
                        return `${val[i].name} must be at most 5MB`;
                    }
                    return true;
                  },
                },
              })}
            />
            {errors.coverPage && (
              <small className="text-danger">{errors.coverPage.message}</small>
            )}
          </div>
          <div className="col-md-12">
            <label htmlFor="verificationDocuments" className="form-label">
              Verification Documents*
            </label>
            <input
              type="file"
              id="verificationDocuments"
              className="form-control"
              style={{ backgroundColor: "#fff" }}
              multiple
              {...register("verificationDocuments", {
                required: "verification documents are requried",
                validate: {
                  countImages: (val: File[]) =>
                    val.length > 5 ? "images count exeeded" : true,
                  imageSize: (val: File[]) => {
                    for (let i = 0; i < val.length; i++) {
                      if (!val[i].type.startsWith("image/"))
                        return `${val[i].name} must be an image`;
                      if (val[i].size > 1024 * 1024 * 5)
                        return `${val[i].name} must be at most 5MB`;
                    }
                    return true;
                  },
                },
              })}
            />
            {errors.verificationDocuments && (
              <small className="text-danger">
                {errors.verificationDocuments.message}
              </small>
            )}
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

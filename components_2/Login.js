import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  // const [mail, setMail] = useState()
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  // functions to build form returned by useForm() hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
  });

  function onSubmit(data) {
    const exist = JSON.parse(localStorage.getItem("isLogin"));
    console.log(exist);

    const userFind = exist.find(
      (e) => e.email === data.email && e.password === data.password
    );
    console.log(userFind);

    if (!userFind) {
      toast.error("Email or Password Not Match", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      localStorage.setItem("logged", JSON.stringify(userFind));
      navigate("/otp");
    }
  }

  return (
    <div>
      <div className=" container-fluid bg-info p-5">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="card m-3">
              <h5 className="card-header">Login Form</h5>
              <div className="card-body text-start">
                <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
                  <div className="form-group col">
                    <label>Email</label>
                    <input
                      name="email"
                      type="text"
                      {...register("email")}
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.email?.message}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-12-5 my-4">
                      <label>Password</label>
                      <input
                        name="password"
                        type="password"
                        {...register("password")}
                        className={`form-control ${
                          errors.password ? "is-invalid" : ""
                        }`}
                      />
                      <div className="invalid-feedback">
                        {errors.password?.message}
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-success mr-1">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
